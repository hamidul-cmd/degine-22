const open = document.querySelector(".open")
const close = document.querySelector(".close")
const manu = document.querySelector(".manu")



open.addEventListener("click", () => {
    manu.classList.toggle("active")
    open.style.display = "none"
    close.style.display = "block"
    document.body.classList.toggle("scrolloff")
})
close.addEventListener("click", () => {
    manu.classList.toggle("active")
    close.style.display = "none"
    open.style.display = "block"
    document.body.classList.remove("scrolloff")
})

document.querySelectorAll(".nav__links").forEach(n => n.addEventListener("click", () => {
    manu.classList.remove("active")
    close.style.display = "none"
    open.style.display = "block"
    document.body.classList.remove("scrolloff")
}))
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }