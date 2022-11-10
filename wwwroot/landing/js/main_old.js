/*$("#preload").click(function () {
    alert("Handler for .click() called.");
});*/

var Core = (function () {
    var _init = function () {
        $("nav#left-nav").mmenu({
            navbar: { add: false },
            extensions: ["widescreen", "pagedim-black"],
            dragOpen: {
                open: $.mmenu.support.touch
            }
        });
    }

    var _initSinglePage = function () {

        $("#tsparticles").particles().ajax("particles.json", function (container) { });

        var $menu = $('nav#left-nav'),
            $html = $('html, body');

        $menu.mmenu({
            navbar: { add: false },
            extensions: ["widescreen", "pagedim-black"],
            dragOpen: {
                open: $.mmenu.support.touch
            }
        });

        var scroll = function () {
            var href = $anchor.attr('href');
            $anchor = false;
            if (href.slice(0, 1) == '#') {
                $html.animate({
                    scrollTop: $(href).offset().top
                });
            }
        }

        var $anchor = false;
        $menu.find('li > a').on(
            'click',
            function (e) {
                $anchor = $(this);
                scroll();
            }
        );

        var api = $menu.data('mmenu');
        api.bind('closed',
            function () {
                if ($anchor) {
                    scroll();
                }
            }
        );

        $(window).scroll(function () {
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function () {

                var st = $(document).scrollTop();
                var offset = 100;

                $(".nav a").removeClass("active");
                $(".languages").removeClass("light");

                if (st >= 0 && st < ($("#portfolio").offset().top - offset)) {
                    $("#introlink").addClass("active");
                    $(".languages").addClass("light");
                }
                else if (st >= ($("#portfolio").offset().top - offset) && st < ($("#pricing").offset().top - offset))
                    $("#portfoliolink").addClass("active");
                //else if (st >= ($("#testimonials").offset().top - offset) && st < ($("#pricing").offset().top - offset))
                //    $("#testimonialslink").addClass("active");
                else if (st >= ($("#pricing").offset().top - offset) && st < ($("#contact").offset().top - offset))
                    $("#pricinglink").addClass("active");
                //else if (st >= ($("#about").offset().top - offset) && st < ($("#contact").offset().top - offset))
                //    $("#aboutlink").addClass("active");
                else if (st >= ($("#contact").offset().top - offset))
                    $("#contactlink").addClass("active");
                //else if (st >= ($("#services").offset().top - offset))
                //    $("#serviceslink").addClass("active");
                else { }
            }, 100));
        });
    }

    var _initIntro = function () {
        $('#toportfolio').click(function () {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            });
        });
    }

    var _initPortfolio = function () {
        $('#tocontact').click(function () {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            });
        });

        $(".portfolio").find(".item").each(function () {

            $(this).click(function (e) {
                e.preventDefault();

                $.swipebox(function (name, num_slides, title) {
                    var rtrn = [];
                    for (var i = 1; i <= num_slides; i++) {
                        rtrn.push({ href: '/images/' + name + '_' + i + '.jpg', title: title });
                    }
                    return rtrn;
                }($(this).data("name"), $(this).data("num-slides"), $(this).data("title")), { removeBarsOnMobile: false });
            });
        });

        $('.items').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: ".leftarrow",
            nextArrow: ".rightarrow",
            autoplay: true,
            autoplaySpeed: 7000,
            cssEase: "ease-out",
            speed: 500,

            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    }

    var _initContact = function () {

        var validator = $("#contactForm").validate({
            errorPlacement: function (error, element) { }
        });

        $('.submit').click(function () {
            $("#cptch").removeClass("error");
            //if ($("#contactForm").valid() && grecaptcha.getResponse() != '') {
            if ($("#contactForm").valid()) {
                $.ajax({
                    url: "/Contact/ContactMe",
                    type: 'POST',
                    data: $('#contactForm').serialize(),
                    beforeSend: function () {
                        $(".form").fadeTo('normal', '0.2');
                    },
                    complete: function (jqXHR, textStatus) {
                        $(".form").hide();
                        $(".thankyou").fadeTo('fast', '1');

                        setTimeout(function () {
                            $('#contactForm')[0].reset();
                            validator.resetForm();
                            grecaptcha.reset();

                            $(".thankyou").fadeTo('normal', '0.2');
                            $(".thankyou").hide();
                            $(".form").fadeTo('fast', '1');
                        }, 5000)
                    }
                });
            }
            else {
                if (grecaptcha.getResponse() == '')
                    $("#cptch").addClass("error")
            }
        });
    }

    var _clearCaptchaError = function () {
        $("#cptch").removeClass("error");
    }

    var _flip = function (i) {
        $(".flipper").css("transform", "none");

        if ($($(".flipper")[i]).css("transform") == "none")
            $($(".flipper")[i]).css("transform", "rotateY(180deg)");
        else
            $($(".flipper")[i]).css("transform", "none");
    }

    return {
        Init: _init,
        InitSinglePage: _initSinglePage,
        InitIntro: _initIntro,
        InitPortfolio: _initPortfolio,
        InitContact: _initContact,
        ClearCaptchaError: _clearCaptchaError,
        Flip: _flip
    }
})();

