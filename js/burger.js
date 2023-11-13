const burgerMenu = document.querySelector(".header-navigation__list");    
    
document.addEventListener("click", e => {
    if (e.target.closest(".header-navigation__burger-btn")) {
        burgerMenu.classList.toggle('active')
        e.target
          .closest(".header-navigation__burger-btn")
          .classList.toggle("active");
    }
})