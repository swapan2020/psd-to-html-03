window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

// Mobile menu btn

document.querySelector(".mobile-menu").addEventListener("click", function(){
    document.querySelector(".header .menu").classList.toggle("active");
    document.querySelector(".mobile-menu i").classList.toggle("active");
})












