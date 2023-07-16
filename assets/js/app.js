const cl = console.log;


const tmSlider = document.getElementById('tmSlider')


$('#tmSlider').owlCarousel({
    loop:true,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5,
            margin:20
        }
    }
})


