function myFunction() {
  var x = document.getElementById("my-nav-bar");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
