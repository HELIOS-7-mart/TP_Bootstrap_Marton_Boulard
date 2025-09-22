document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    function onScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add('bg-primary', 'shadow');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-primary', 'shadow');
            navbar.classList.add('bg-transparent');
        }
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
});


