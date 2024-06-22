function myFunction(x) {
    x.classList.toggle("change");
    var menuIcon = document.querySelector('nav');
    var body = document.querySelector('#main');

    menuIcon.classList.toggle('nav-toggle');
    body.classList.toggle('b-overflow')
}