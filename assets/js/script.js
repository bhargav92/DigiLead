$ = jQuery.noConflict();


$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);

});

jQuery(function ($) {


    "use strict";


    /* ===================================
            Scroll
    ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
        }
    });


    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 3000)
        });
    });


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    // fixing bottom nav to top on scrolliing
    var $fixednav = $(".bottom-nav");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });


    //scroll sections
    if ($("body").hasClass("intrective")) {
        $(".scroll").on("click", function (event) {
            event.preventDefault();
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top
            }, 100);
        });

    } else {

        $(".scroll").on("click", function (event) {
            event.preventDefault();
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 60
            }, 100);
        });

    }

    

    /* ===================================
       Side Menu
   ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    if ($(".side-right-btn").length) {

        $(".side-right-btn").click(function () {
                $(".navbar.navbar-right").toggleClass('show');
            }),
            $(".navbar.navbar-right .navbar-nav .nav-link").click(function () {
                $(".navbar.navbar-right").toggleClass('show');
            });

    }


    

    /* =====================================
      Coming Soon Count Down
     ====================================== */


    if ($(".count_down").length) {
        $('.count_down').downCount({
            date: '03/3/2019 12:00:00',
            offset: +10
        });
    }




    /* =====================================
          Wow
     ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /* ===================================
        Animated Cursor
     ====================================== */

    function animatedCursor() {

        if ($("#aimated-cursor").length) {

            var e = {
                    x: 0,
                    y: 0
                },
                t = {
                    x: 0,
                    y: 0
                },
                n = .25,
                o = !1,
                a = document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, {
                    xPercent: -50,
                    yPercent: -50
                }), document.addEventListener("mousemove", function (t) {
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    e.x = t.pageX, e.y = t.pageY - n
                }), TweenLite.ticker.addEventListener("tick", function () {
                    o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {
                        x: t.x,
                        y: t.y
                    }))
                }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {
                        scale: 2
                    }), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {
                        scale: .5
                    }), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {
                        scale: 1
                    }), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {
                        scale: 1,
                        x: 0,
                        y: 0
                    }), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {
                        borderWidth: "1px",
                        scale: 2,
                        opacity: 0
                    })
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                    TweenMax.to("#cursor", .3, {
                        borderWidth: "2px",
                        scale: 1,
                        opacity: 1
                    })
                }), $(".link").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {
                        borderWidth: "0px",
                        scale: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.27)",
                        opacity: .15
                    })
                }), $(".link").mouseleave(function (e) {
                    TweenMax.to("#cursor", .3, {
                        borderWidth: "2px",
                        scale: 1,
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        opacity: 1
                    })
                })

        }

    }
    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }


    //Contact Us
    $("#submit_btn").click(function () {

        //disable submit button on click
        $("#submit_btn").attr("disabled", "disabled");
        $("#submit_btn span").text('Sending');
        $("#submit_btn i").removeClass('d-none');

        var user_name = $('input[name=first_name]').val() + ' ' + $('input[name=last_name]').val();
        var user_email = $('input[name=email]').val();
        var user_phone = $('input[name=phone]').val();
        var user_message = $('textarea[name=message]').val();

        //simple validation at client's end
        var post_data, output;
        var proceed = true;
        if (user_name == "") {
            proceed = false;
        }
        if (user_email == "") {
            proceed = false;
        }
        // if (user_phone == "") {
        //proceed = false;
        // }

        if (user_message == "") {
            proceed = false;
        }
        //everything looks good! proceed...
        if (proceed) {

            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userPhone': user_phone,
                'userMessage': user_message
            };

            //Ajax post data to server
            $.post('contact.php', post_data, function (response) {

                //load json data from server and output message
                if (response.type == 'error') {
                    output = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">' + response.text + '</div>';
                } else {
                    output = '<div class="alert-success" style="padding:10px; margin-bottom:30px;">' + response.text + '</div>';

                    //reset values in all input fields
                    $('.contact-form input').val('');
                    $('.contact-form textarea').val('');
                }

                $("#result").hide().html(output).slideDown();

                // enable submit button on action done
                $("#submit_btn").removeAttr("disabled");
                $("#submit_btn span").text('Contact Now');
                $("#submit_btn i").addClass('d-none');

            }, 'json');

        } else {
            output = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">Please provide the missing fields.</div>';
            $("#result").hide().html(output).slideDown();

            // enable submit button on action done
            $("#submit_btn").removeAttr("disabled");
            $("#submit_btn span").text('Contact Now');
            $("#submit_btn i").addClass('d-none');
        }

    });


    



});