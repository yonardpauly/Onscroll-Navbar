window.onload = () => {

    var mainNav = document.getElementById('main-nav')
    var navbarToggle = document.getElementById('navbar-toggle')

    navbarToggle.addEventListener('click', function () {

        if (this.classList.contains('active')) {
            mainNav.style.display = "none"
            this.classList.remove('active')
        } else {
            mainNav.style.display = "flex"
            this.classList.add('active')
        }
    });

    var toggle = document.getElementById('navbar-toggle');
    toggle.onclick = () => {
        toggle.classList.toggle("open");
    }
}
