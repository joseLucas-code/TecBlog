const MenuBTN = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-desktop");
const blackBG = document.querySelector(".black-bg");

//abrir/fechar menu MOBILE.
MenuBTN.addEventListener("click", toggleMenu);
blackBG.addEventListener("click", toggleMenu);

function toggleMenu() {
  MenuBTN.classList.toggle("menu-btn-open");
  menu.classList.toggle("menu-open");
  blackBG.classList.toggle("black-bg-open");
  document.body.classList.toggle("body-overflow");
}

//alterar tema para escuro/claro.
const lightBtn = document.querySelector(".light_theme_btn");
const darkBtn = document.querySelector(".dark_theme_btn");

const themeBTN = document.querySelector(".theme_btn");
let currentTheme = localStorage.getItem("darkMode");

let themeN = 0;

let toggleTheme = () => {
  document.body.classList.toggle("dark-theme");

  if (themeN === 0) {
    localStorage.setItem("darkMode", "enable");
    themeN = 1;
  } else if ((themeN = 1)) {
    localStorage.setItem("darkMode", "disable");
    themeN = 0;
  }
};

if (currentTheme === "enable") {
  toggleTheme();
  lightBtn.style.display = "block";
  darkBtn.style.display = "none";
}

themeBTN.addEventListener("click", () => {
  currentTheme = localStorage.getItem("darkMode");

  if (currentTheme === "enable") {
    toggleTheme();
    lightBtn.style.display = "none";
    darkBtn.style.display = "block";
  } else {
    toggleTheme();
    lightBtn.style.display = "block";
    darkBtn.style.display = "none";
  }
});

// scroll to Contatc

function scrollWin(element) {
  const scrollEL = document.querySelector(element);

  scrollEL.scrollIntoView({ behavior: "smooth", block: "start" });
}

//sub-menu

const jogosBTN = document.querySelector(".jogos-btn");
const jogosHidden = document.querySelector(".jogos-hidden");
const jogosSortArrow = document.querySelector(".jogos-btn i");
const eletroBTN = document.querySelector(".eletro-btn");
const eletroHidden = document.querySelector(".eletro-hidden");
const eletroSortArrow = document.querySelector(".eletro-btn i");

jogosBTN.addEventListener("click", () => {
  jogosHidden.classList.toggle("jogos-show");
  jogosSortArrow.classList.toggle("arrow-rotate");
  eletroHidden.classList.remove("eletro-show");
  eletroSortArrow.classList.remove("arrow-rotate");
});

eletroBTN.addEventListener("click", () => {
  eletroHidden.classList.toggle("eletro-show");
  eletroSortArrow.classList.toggle("arrow-rotate");
  jogosHidden.classList.remove("jogos-show");
  jogosSortArrow.classList.remove("arrow-rotate");
});

// change header on scroll

window.addEventListener("scroll", () => {
  const cabecalho = document.querySelector(".cabecalho");

  cabecalho.classList.toggle(
    "onScroll",
    window.scrollY > cabecalho.clientHeight
  );
});
