jQuery(function ($) {

/* =====================================
           Parallax
    ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }


    /* ===================================
      Rotating Text
      ====================================== */

      if ($("#js-rotating").length) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }

    /* ===================================
      Type Text
      ====================================== */

    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }

    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('UI/UX Designer').pauseFor(2000).deleteAll()
            .typeString('Web Developer').pauseFor(2000).deleteAll()
            .typeString('Wordpress Developer').start();
    }
})



/* ===================================
          Owl Carousel
   ====================================== */

    //About Slider

    $("#laptop-slide").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 3000,
        // mouseDrag:false,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    //App Slider

    // $("#app-slider").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     dots: false,
    //     nav: false,
    //     animateOut: 'fadeOut',
    //     animateIn: 'fadeIn',
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     // mouseDrag:false,
    //     responsive: {
    //         1280: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 1,
    //         },
    //         320: {
    //             items: 1,
    //         },
    //     }
    // });

    // Team Slider

    // $("#team-slider").owlCarousel({
    //     items: 3,
    //     dots: false,
    //     nav: false,
    //     responsive: {
    //         991: {
    //             items: 3,
    //         },
    //         767: {
    //             items: 2,
    //         },
    //         320: {
    //             items: 1,
    //         },
    //     }
    // });

    //portfolio slider

    $("#portfolio-slider").owlCarousel({
        // items: 3,
        dots: true,
        autoplay: true,
        nav: false,
        responsive: {
            1200: {
                items: 4,
            },
            991: {
                items: 3,
            },
            767: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    // $("#team-three-slider").owlCarousel({
    //     items: 4,
    //     dots: false,
    //     nav: false,
    //     responsive: {
    //         991: {
    //             items: 4,
    //         },
    //         767: {
    //             items: 2,
    //         },
    //         320: {
    //             items: 1,
    //         },
    //     }
    // });

    //testimonial slider

    $("#testimonial_slider").owlCarousel({
        // items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            1200: {
                items: 3,
            },
            991: {
                items: 2,
            },
            767: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    //single slider

    // $("#single-slider").owlCarousel({
    //     items: 1,
    //     nav: false,
    //     loop: true,
    //     mouseDrag: false,
    //     animateOut: 'fadeOut',
    //     animateIn: 'fadeIn',
    //     autoplay: true,
    //     autoplayTimeout: 3000,

    // });

    // //team two slider

    // $("#team-slider-two").owlCarousel({
    //     items: 1,
    //     nav: false,
    //     loop: true,
    //     dots: false,
    //     responsive: {
    //         991: {
    //             items: 2,
    //             autoplayHoverPause:true,
    //             autoplay: true,
    //             autoplayTimeout: 3000,
    //         },
    //         320: {
    //             items: 1,
    //         },
    //     }

    // });