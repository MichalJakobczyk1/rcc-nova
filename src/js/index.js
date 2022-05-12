//import { entries } from "core-js/core/array";
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

const threshold = document.querySelector(".section__article--offer");
const header = document.querySelector(".header");
const logo = document.querySelector(".section--logo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      header.classList.add("header--modified");
      header.classList.remove("header--demodified");
    }
  });
});

observer.observe(threshold);

const observerReversed = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      header.classList.remove("header--modified");
      header.classList.add("header--demodified");
    }
  });
});

observerReversed.observe(logo);
