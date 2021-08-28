//Navbar function to add responsive to it

function myFunction() {
  var x = document.getElementById("my-nav-bar");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

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
