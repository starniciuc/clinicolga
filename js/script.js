var firstImage = "";
var secondImage = "";

$(document).ready(function () {
    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        side: 'right',
        source: '#navigation'
    });

    $('.sidr-class-dropdown > a').click(function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

    $('header, main, footer').click(function () {
        $.sidr('close', 'sidr-main');
    });

    $('.show').on("click", function (event) {
        event.preventDefault();
        $(".list-to-show").fadeOut(200);

        if($(this).hasClass("open")) {
            $(this).removeClass("open");
        }
        else {
            $(this).parent().find(".list-to-show").fadeIn(200);
            $(this).addClass("open");
        }
    });

    $('.hide').on("click", function (event) {
        event.preventDefault();
        $(this).parents(".list-to-show").fadeOut(200);
    });


    $('.reply').on('click', function(event) {
        event.preventDefault();
        Custombox.open({
            target: '#modal',
            effect: 'fadein'
        });

    });

    firstImage = function() {
        var $parentBlock = $(this).parents(".item-bottom-slider");
        var images = $parentBlock.find("img")

        $(images).each(function (i, val) {
            if ($(val).hasClass("visible-image"))
                $(val).removeClass("visible-image")
            else
                $(val).addClass("visible-image")
        })
    }

    secondImage = function() {
        var $parentBlock = $(this).parents(".item-bottom-slider");
        var images = $parentBlock.find("img")

        $(images).each(function (i, val) {
            if ($(val).hasClass("visible-image"))
                $(val).removeClass("visible-image")
            else
                $(val).addClass("visible-image")
        })
    }

    $( '.select-image button' ).on( 'click', function() {
        $( this ).parent().find( 'button.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });


    $("#owl-demo-prosthetics-v1").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        paginationNumbers: true,
        navigationText: ["<img src='images/left.png' class='arrow-left-bottom'>", "<img src='images/right.png' class='arrow-right-bottom'>"],

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    $("#owl-demo-prosthetics-v2").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        paginationNumbers: false,
        navigationText: ["<img src='images/left.png' class='arrow-left-bottom'>", "<img src='images/right.png' class='arrow-right-bottom'>"],

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    $("#owl-demo").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<img src='images/left.png' class='multi-left'>", "<img src='images/right.png' class='multi-right'>"],
        scrollPerPage: true,
        autoPlay: true,
        pagination: false

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    var owl = $("#owl-demo-multislider");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1050, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [750, 1], // betweem 900px and 601px
        itemsTablet: [0, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        autoPlay: true,
        pagination: false,
        paginationNumbers: false
    });

    $("#specialistsSlider").owlCarousel({
        center: true,
        navigationText: ["<img src='images/left.png' class='arrow-left-bottom'>", "<img src='images/right.png' class='arrow-right-bottom'>"],
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1050, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [750, 1], // betweem 900px and 601px
        itemsTablet: [0, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        autoPlay: true,
        pagination: true,
        navigation: true,
        paginationNumbers: false
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

    $("#owl-demo-bottom").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        paginationNumbers: true,
        navigationText: ["<img src='images/left.png' class='arrow-left-bottom'>", "<img src='images/right.png' class='arrow-right-bottom'>"],

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    $('.bottom-arrow-right').click(function () {
        $('.owl-page').css({
            'visibility': 'visible'
        })
    })
    var n = $(".owl-page").length;
    $('.owl-pagination').append('/' + n);

    $("#printSection").click(function (e){
        e.preventDefault();
        window.print()
    });
});

