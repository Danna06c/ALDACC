document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById('loader');
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        loader.addEventListener('transitionend', function() {
            loader.style.display = 'none';
            var content = document.getElementById('content');
            content.classList.add('show');
        });
    }, 1000); 
});

const container = document.querySelector('.container');
const btnSingIn = document.getElementById("btn-sign-in");
const btnSingUp = document.getElementById("btn-sign-up");

btnSingIn.addEventListener('click',()=>{
   container.classList.remove("toggle");
});

btnSingUp.addEventListener('click',()=>{
    container.classList.add("toggle");
});