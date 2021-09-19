//Navbar function to add responsive to it


const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Dark Mode btn function

// function DarkMode() {
//   var element = document.body;
//   element.classList.toggle("theme-switcher");
// }

// const darkModeOn = document.querySelector(".btn");

// darkModeOn.addEventListener("click", (e) => {
//   e.prevenDefault();
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".topnav").style.color = "#ffff";
// });
