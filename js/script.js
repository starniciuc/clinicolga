$(document).ready(function () {

    $(".show").click(function() {
        event.preventDefault();
        var $parent = $(this).parent();
        var $slideElm = $parent.find(".list-to-show");
        $slideElm.fadeToggle(200)
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
        pagination: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
    /*
     var totalItems = $('.owl-item').length;
     var currentIndex = $('.active').index() + 1;
     $('.num').html(''+currentIndex+'/'+totalItems+'');


     $('#owl-demo-bottom').bind('slid', function() {
     currentIndex = $('#owl-demo-bottom > .active').index() + 1;
     $('.num').html(''+currentIndex+'/'+totalItems+'');
     });
     */


    $('.bottom-arrow-right').click(function () {
        $('.owl-page').css({
            'visibility': 'visible'
        })
    })
    var n = $(".owl-page").length;
    $('.owl-pagination').append('/' + n);


});
