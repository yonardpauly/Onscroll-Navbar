window.onscroll = () => {
    var navbar = document.getElementById("navParent")
    var innerNav = document.getElementById("myNavbar")
    var sticky = navbar.offsetTop

    if (window.pageYOffset > sticky) {
        innerNav.classList.add('sticky-margin')
        navbar.style.transition = ".5s ease-in-out"
        navbar.style.background = "rgba(0, 0, 0, 0.5)"
    }

    if (window.pageYOffset <= sticky) {
        innerNav.classList.remove('sticky-margin')
        navbar.style.transition = ".5s ease-in-out"
        navbar.style.background = "rgba(0,0,0,0)"
    }
}
