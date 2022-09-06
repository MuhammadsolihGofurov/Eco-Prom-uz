$(document).ready(function(){

    // bars
    $('.bars').click(function(){
        $('.nav_bar').toggleClass('auto')
    })
})

// swipper
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 800,
    parallax: true,
});

// project swiper
var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//   scroll top
let mybutton = document.getElementById("btn-back-to-top");
        window.onscroll = function () {
        scrollFunction();
        };

        function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }
       if(mybutton){
        mybutton.addEventListener("click", backToTop);
       }

        function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }