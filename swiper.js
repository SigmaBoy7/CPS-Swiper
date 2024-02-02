const swiper = new Swiper('.brand__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});