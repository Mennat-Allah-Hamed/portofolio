
let allLis = document.querySelectorAll("header nav ul li a");
allLis.forEach(function (element) {
    element.onclick = function () {
        allLis.forEach(function (element) {
            element.classList.remove("activty");
        })
        this.classList.add("activty");
    }
});

// window.addEventListener('scroll',function(){
//     const header=this.document.querySelector('header');
//     header.classList.toggle("sticky",this.window.scrollY>0);
    
// });

// function toggleMenu(){
//     const menuToggle=document.querySelector('.menuToggle');
//     const navigation=document.querySelector('nav ul')
//     menuToggle.classList.toggle('active');
//     navigation.classList.toggle('active');
// };

let activty = document.querySelector("ul li .activty");

let btnScroll = document.getElementById("btn-scroll");
window.addEventListener("scroll" , function () {
    if (window.scrollY >= 150) {
        btnScroll.style.display = 'block';
        activty.classList.remove("activty");
    }else{
        btnScroll.style.display = 'none';
        activty.classList.add("activty");
    };
});
btnScroll.addEventListener("click", function () {
    window.scrollTo ({
        left: 0,
        top: 0,
    })
})