document.addEventListener('DOMContentLoaded', function () {
    
    var exitButton = document.querySelector('.exit-btn');

    exitButton.addEventListener('click', function () {

        window.location.href = "rentMovie.html"; 
    });
});
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list"); 

hamburger.addEventListener("click", () => nav.classList.toggle("active"));