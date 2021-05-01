  var navMain = document.querySelector(".main-navbar");
  var navToggle = document.querySelector(".main-navbar__burger");

  navMain.classList.remove("main-navbar--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-navbar--closed")) {
      navMain.classList.remove("main-navbar--closed");
      navMain.classList.add("main-navbar--opened");
    } else {
      navMain.classList.add("main-navbar--closed");
      navMain.classList.remove("main-navbar--opened");
    }
  });
