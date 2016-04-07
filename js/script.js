$(document).ready(function () {
    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        side: 'right',
        source: '#navigation'
    });


    $(".sidr-class-primary_nav_wrap ul li a").click(function (event) {
        event.preventDefault();
        $(this).next('ul').slideToggle('slow');
    });

    $('header, main, footer').click(function () {
        $.sidr('close', 'sidr-main');
    });

    $('.show').on("click", function (event) {
        event.preventDefault();
        $(this).parent().find(".list-to-show").fadeToggle(200);
    });

    $('.hide').on("click", function (event) {
        event.preventDefault();
        $(this).parents(".list-to-show").fadeToggle(200);
    });


    $('.reply').on('click', function(event) {
        event.preventDefault();
        Custombox.open({
            target: '#modal',
            effect: 'fadein'
        });

    });



    $('#posle').on('click', getNext);

    $('#do').on('click', getPrev);

    function getNext() {
        var $curr = $('.slideshow img:visible'),
            $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();

        transition($curr, $next);
    }

    function getPrev() {
        var $curr = $('.slideshow img:visible'),
            $next = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
        transition($curr, $next);

    }

    function transition($curr, $next) {

        $next.css('display', 'block').fadeIn('slow', function () {
            $curr.hide().css('display', 'none');
            $next.css('display', 'block');
        });

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


});

