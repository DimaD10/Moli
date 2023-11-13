const navElements = document.querySelectorAll(".header-navigation__el");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header-navigation__el")) {
    document.querySelectorAll(".site-actions__body").forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelectorAll(".site-actions__button").forEach((el) => {
      el.classList.remove("active");
    });

    navElements.forEach((el) => {
      el.classList.remove("header-navigation__el_current");
    });

    e.target.classList.add("header-navigation__el_current");

    if (e.target.textContent.toLowerCase() === "galery") {
      document.querySelectorAll(".extern-page").forEach((page) => {
        page.classList.remove("current");
      });
      document.querySelector(".gallery").classList.add("current");
      navElements.forEach((el) => {
        el.classList.add("bronze");
      });
      e.target.closest(".header-navigation").classList.add("other");
    } else if (e.target.textContent.toLowerCase() === "menu") {
      document.querySelectorAll(".extern-page").forEach((page) => {
        page.classList.remove("current");
      });
      document.querySelector(".menu").classList.add("current");
      navElements.forEach((el) => {
        el.classList.add("bronze");
      });
      e.target.closest(".header-navigation").classList.add("other");
    } else if (e.target.textContent.toLowerCase() === "news") {
      document.querySelectorAll(".extern-page").forEach((page) => {
        page.classList.remove("current");
      });
      document.querySelector(".news").classList.add("current");
      navElements.forEach((el) => {
        el.classList.add("bronze");
      });
      e.target.closest(".header-navigation").classList.add("other");
    } else if (e.target.textContent.toLowerCase() === "contacts") {
      document.querySelectorAll(".extern-page").forEach((page) => {
        page.classList.remove("current");
      });
      document.querySelector(".contacts").classList.add("current");
      navElements.forEach((el) => {
        el.classList.add("bronze");
      });
      e.target.closest(".header-navigation").classList.add("other");
    } else if (e.target.textContent.toLowerCase() === "home") {
      document.querySelectorAll(".extern-page").forEach((page) => {
        page.classList.remove("current");
      });
      navElements.forEach((el) => {
        el.classList.remove("bronze");
      });
      e.target.closest(".header-navigation").classList.remove("other");
    } else {
      console.log(false, e.target.textContent.toLowerCase());
    }
  }
});
