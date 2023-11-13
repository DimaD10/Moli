document.addEventListener("click", (e) => {
  if (e.target.closest(".site-actions__button")) {
    let location = e.target.closest(".site-actions-block");

    if (
      e.target.closest(".site-actions__button").classList.contains("active")
    ) {
      e.target.closest(".site-actions").classList.remove("active");
      e.target.closest(".site-actions__button").classList.remove("active");
      location.querySelector(".site-actions__body").classList.remove("active");
    } else {
      document.querySelectorAll(".site-actions__body").forEach((el) => {
        el.classList.remove("active");
      });
      document.querySelectorAll(".site-actions__button").forEach((el) => {
        el.classList.remove("active");
      });

      e.target.closest(".site-actions").classList.add("active");
      e.target.closest(".site-actions__button").classList.toggle("active");
      location.querySelector(".site-actions__body").classList.toggle("active");
    }
  }

  if (e.target.closest(".catalog__more-btn")) {
    e.target.closest(".catalog__more-btn").classList.toggle("active");
    e.target
      .closest(".catalog__category")
      .querySelector(".catalog__list")
      .classList.toggle("active");

    e.target.closest(".catalog__wrapper").classList.toggle("active");
  }


  if (e.target.closest(".call-interior-gallery")) {
    document.querySelector(".catalog-gallery_interior").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".call-food-gallery")) {
    document.querySelector(".catalog-gallery_food").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".call-guests-gallery")) {
    document.querySelector(".catalog-gallery_guests").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }


  if (e.target.closest(".show-catalog")) {
    document.querySelector(".catalog-frame").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".catalog__return-btn")) {
    e.target.closest(".catalog").classList.remove("active");
    document.querySelector(".header-navigation").classList.remove("hidden");
  }

  if (e.target.closest('.preloader')) {
    e.target.closest(".preloader").classList.add('hidden');
  }
  if (e.target.closest(".location-body__map")) {
    document.querySelector('.real-map').classList.add("active")
  }
});

window.addEventListener("load", () => {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("myDate").min = today;
});

window.setTimeout(() => {
  document.querySelector('.preloader').classList.add('hidden')
}, 12000);