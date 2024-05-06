const burger = document.getElementById("burger")
const nav = document.getElementById("nav-links")

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)