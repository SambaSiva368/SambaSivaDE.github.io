document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('navbar');

    document.body.addEventListener('mouseover', function () {
        navbar.style.width = '150px';
    });

    document.body.addEventListener('mouseout', function () {
        navbar.style.width = '40px';
    });
});
