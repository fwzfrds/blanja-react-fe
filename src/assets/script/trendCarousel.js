var owl = $('.owl-carousel');

owl.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    touchDrag: true,
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 2,
    stagePadding: 50,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1,
            margin: 0
        },
        1000:{
            items: 4
        }
    }
})

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});