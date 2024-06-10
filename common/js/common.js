AOS.init();

$(()=>{
    console.log($);
    /* default */
    var swiper = new Swiper("#product-slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next.product",
            prevEl: ".swiper-button-prev.product",
        },
        breakpoints: {
            /* html >= 450px (pc일때를 말함) */
            450: {
                spaceBetween: 24,
                navigation: {
                    nextEl: ".swiper-button-next.product",
                    prevEl: ".swiper-button-prev.product",
                },
            },
        }
    });

    var swiper = new Swiper("#equipment-slider", {
        /* default */
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next.equipment",
            prevEl: ".swiper-button-prev.equipment",
        },
        breakpoints: {
            /* html >= 450px (pc일때를 말함) */
            450: {
                slidesPerView: "auto",
                spaceBetween: 122,
                loop: true,
                centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next.equipment",
                    prevEl: ".swiper-button-prev.equipment",
                },
            },
        }
    });

    var swiper = new Swiper("#history-slider", {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})