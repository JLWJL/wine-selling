$(function() {
    "use strict";
    function s() {
        return /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
    function e() {
        $(".homepage-header").css({
            width: $(window).width(),
            height: $(window).height()
        })
    }

    $(window).resize(function() {
        e()
    }).resize(),

    $(".homepage-header").vegas({
        overlay: !0,
        transitionDuration: 4e3,
        delay: 1e4,
        slides: [{
            src: "images/img1.jpg",
            color: "#DBC9B3",
            transition: "fade",
            transitionDuration: 1e4
        },
        {
            src: "images/img2.jpg",
            color: "#F6B700",
            transition: "zoomOut",
            transitionDuration: 8e3
        },
        {
            src: "images/img3.jpg",
            color: "#C47F48",
            animation: "random",
            transition: "swirlRight"
        },
        {
            src: "images/img5.jpg",
            color: "#EFAF41",
            animation: "random"
        },
        {
            src: "images/img4.jpg",
            color: "#CBC2B9",
            animation: "kenburns",
            transition: "swirlLeft2"
        },
        {
            src: "images/img6.jpg",
            color: "#ECA24D",
            animation: "random"
        }],
        walk: function(s, e) {
            s = null,
            $(".vegas-timer-progress").css("backgroundColor", e.color)
        }
    });

});

