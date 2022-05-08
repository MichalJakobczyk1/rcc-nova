import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.body.classList.remove("body--preload");
});

const buttonLangPl = document.querySelector(".header__button--Pl");
const buttonLangEng = document.querySelector(".header__button--Eng");

buttonLangPl.addEventListener("click", () => {
  if (buttonLangPl.classList.contains("header__button--unactive")) {
    buttonLangPl.classList.remove("header__button--unactive");
    buttonLangPl.classList.add("header__button--active");
    buttonLangEng.classList.add("header__button--unactive");
    buttonLangEng.classList.remove("header__button--active");
  }
});

buttonLangEng.addEventListener("click", () => {
  if (buttonLangEng.classList.contains("header__button--unactive")) {
    buttonLangEng.classList.remove("header__button--unactive");
    buttonLangEng.classList.add("header__button--active");
    buttonLangPl.classList.remove("header__button--active");
    buttonLangPl.classList.add("header__button--unactive");
  }
});
