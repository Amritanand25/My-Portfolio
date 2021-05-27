$(document).ready(function(){
    $('.slider').slick({

        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'

    });


    var mobileicon = document.querySelector('.mobile-nav-icon');
    var close = document.querySelector('.closenav');
    var mobileNav =document.querySelector('.mobile-nav')
    mobileicon.addEventListener('click', function(){
        mobileNav.classList.add('open');

    });

    close.addEventListener('click', function(){
    
        mobileNav.classList.remove('open'); 
    });
})


function myfun(){ 
    var modal = document.getElementById("mymodal");
    modal.style.display = "block";
}

function myclose(){
    var modal = document.getElementById("mymodal");
    modal.style.display = "none"; 
}
