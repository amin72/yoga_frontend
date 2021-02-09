jQuery(function($){

    /*! Variables */
    var viewportW = $(window).width(),
    viewportH = $(window).height(),
    body = $('body'),
    home = $('.home'),
    mainNav = $('.js-main-nav'),
    mainNavH = mainNav.outerHeight(),
    mainNavTop = $('.js-main-nav-top'),
    mainNavFixed = $('.js-main-nav-fixed'),
    navToggle = $('.js-nav-toggle'),
    cartToggle = $('.js-cart-toggle'),
    cartClose = $('.cart-close'),
    miniCart = $('.js-mini-cart'),
    navSearch = $('.js-nav-search'),
    navSearchBlock = $('.js-nav-search-block'),
    navSearchInput = $('.js-nav-search-input'),
    navFSearch = $('.js-nav-f-search'),
    navFSearchBlock = $('.js-nav-f-search-block'),
    navFSearchInput = $('.js-nav-f-search-input'),
    submenuToggle = $('.menu-item-has-children'),
    bookPopup = $('.js-book-popup'),
    bookPopupOverlay = $('.js-book-popup-overlay'),
    bookPopupClose = $('.js-book-popup-close'),
    generalPopup = $('.js-k-popup'),
    generalPopupToggle1 = $('.js-k-popup-toggle-1'),
    generalPopupOverlay = $('.js-k-popup-overlay'),
    generalPopupClose = $('.js-k-popup-close'),
    cartActive = true,
    woocommerceCart = 'woocommerce-cart',
    woocommerceCheckout = '.woocommerce-checkout',
    mediaCarousel = $('.js-press-carousel'),
    pageContent = $('.page-content'),
    postsCarousel = $('.js-posts-carousel'),
    mainSidebar = $('.js-main-sidebar'),
    instafeed = $("#instafeed"),
    fluidEmbedWrap = $('.f-embed-wrap'),
    postForm = $('.postform'),
    touch = $('.js-touch'),
    isActive = 'is-active',
    isInactive = 'is-inactive',
    isFixed = 'is-fixed',
    hover = 'hover',
    scrollTo = $('a[href^="#"]'),
    toTop = $('.js-to-top');

    /*! Navigation */
    navToggle.click(function() {if(navToggle.hasClass('is-active')) {navToggle.removeClass('is-active'); body.removeClass('menu-active'); } else {navToggle.addClass('is-active'); body.addClass('menu-active');} });
    submenuToggle.hoverIntent({interval: 200, over: submenu_show, timeout: 500, out: submenu_hide });
    function submenu_show(){ $(this).addClass('is-active'); }
    function submenu_hide(){ $(this).removeClass('is-active'); }
    /*! Cart */
    if(body.hasClass(woocommerceCart)) cartActive = false;
    if(body.hasClass(woocommerceCheckout)) cartActive = false;
    if(cartActive) {
        cartToggle.click(function() {if(miniCart.hasClass(isActive)) {miniCart.removeClass(isActive);} else {miniCart.addClass(isActive); } });
        cartClose.click(function() { miniCart.removeClass(isActive); });
    }
    /*! Search */
    navSearch.click(function() {
        if(navSearch.hasClass(isActive)) {
            navSearch.removeClass(isActive);
            navSearchBlock.removeClass(isActive);
        } else {
            setTimeout(function() { navSearchInput.focus() }, 400);
            navSearch.addClass(isActive);
            navSearchBlock.addClass(isActive);
        }
    });
    navFSearch.click(function() {
        if(navFSearch.hasClass(isActive)) {
            navFSearch.removeClass(isActive);
            navFSearchBlock.removeClass(isActive);
        } else {
            setTimeout(function() { navFSearchInput.focus() }, 400);
            navFSearch.addClass(isActive);
            navFSearchBlock.addClass(isActive);
        }
    });

    /*! Chair Yoga Popup */
    bookPopupOverlay.click(function() {
        bookPopup.removeClass(isActive);
    });
    bookPopupClose.click(function() {
        bookPopup.removeClass(isActive);
    });

    /*! General Popup */
    generalPopupToggle1.click(function() {
        generalPopup.addClass(isActive);
    });
    generalPopupOverlay.click(function() {
        generalPopup.removeClass(isActive);
    });
    generalPopupClose.click(function() {
        generalPopup.removeClass(isActive);
    });

    /*! Homepage - Media Carousel */
    if(mediaCarousel.length > 0 ){
        mediaCarousel.owlCarousel({items:8,margin:0,nav:false,dots:false,loop:true,autoplay:true,autoplayTimeout:100,smartSpeed:5000,animateIn:false,animateOut:false,navText:"",responsive:{220:{items:3}, 600:{items:5}, 1000:{items:8} }});
    };

    /*! Posts Slider */
    if(postsCarousel.length > 0 ){
        postsCarousel.owlCarousel({items:3,margin:0,stagePadding:0,nav:true,dots:false,loop:false,smartSpeed:1500,animateIn:false,animateOut:false,navText:"",responsive:{220:{items:1}, 600:{items:2}, 1000:{items:3} }});
    };

    /*! Instagram */
    if(instafeed.length > 0 ){ var userFeed=new Instafeed({get:"user",userId:255158570,accessToken:"255158570.9b43db5.fa11ba1bb9aa4d8880599d198085f15a",limit:5,resolution:"standard_resolution"});userFeed.run(); ;}

    /*! Video Embeds */
    if(pageContent.length > 0 ){pageContent.fitVids(); }

    /*! Sidebar Categories */
    if(postForm.length > 0 ){ postForm.selectOrDie({size:5}); }

    touch.on("touchstart", function (e) {'use strict'; var link = $(this); if (link.hasClass('hover')) {return true; } else {link.addClass('hover'); $('.js-touch').not(this).removeClass('hover'); e.preventDefault(); return false; } });

    scrollTo.on("click",function(e){e.preventDefault();var target=this.hash,$target=$(target);$("html, body").stop().animate({"scrollTop":$target.offset().top},1500,"swing",function(){window.location.hash=target;});});

    /*! Animations */
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

    /*! Intro Section */
    var introHeadlineReveal1 = new TimelineMax();
    introHeadlineReveal1.set('.kh-i-1', {opacity:0}).to('.kh-i-1', 1, { delay: 1, opacity: 1, ease: Power1.easeInOut });
    var introPlayReveal = new TimelineMax();
    introPlayReveal.set('.section-intro .intro-play', {opacity:0, y:"-10%"}).to('.section-intro .intro-play', 1, { delay: 1, opacity: 1, y:"0%", ease: Power1.easeInOut });
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-intro", duration: "100%"})
    .setTween(".section-intro .section__bg--intro", {y: "100%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-intro", duration: "100%"})
    .setTween(".section-intro .section__bg--intro-overlay", {y: "-10%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-intro", duration: "25%"})
    .setTween(".section-intro .cell-wrap", {y: "30%", opacity: 0, ease: Linear.easeNone})
    .addTo(controller);

    /*! Book Popup */
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-1", reverse: false})
    .setClassToggle(".js-book-popup", "is-active")
    .addTo(controller);

    /*! Newsletter Section BG */
    var newsletterBG = new TimelineMax();
    newsletterBG.set('.section-c .section__bg', {y:"-50%"});
    new ScrollMagic.Scene({triggerElement: ".section-c", duration: "200%"})
    .setTween(".section-c .section__bg", {y: "50%", ease: Linear.easeNone})
    .addTo(controller);

    /*! Testimonials / Collage Section */
    new ScrollMagic.Scene({offset: - viewportH * 0.4, triggerElement: ".section-e", duration: "200%"})
    .setClassToggle(".f-testimonials", "is-active")
    .addTo(controller);
    new ScrollMagic.Scene({offset: - viewportH * 0.4, triggerElement: ".section-e", duration: "32%"})
    .setClassToggle(".f-testimonials__item-1", "is-active")
    .addTo(controller);
    new ScrollMagic.Scene({offset: - viewportH * 0.08, triggerElement: ".section-e", duration: "32%"})
    .setClassToggle(".f-testimonials__item-2", "is-active")
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.24, triggerElement: ".section-e", duration: "32%"})
    .setClassToggle(".f-testimonials__item-3", "is-active")
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.56, triggerElement: ".section-e", duration: "32%"})
    .setClassToggle(".f-testimonials__item-4", "is-active")
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.88, triggerElement: ".section-e", duration: "32%"})
    .setClassToggle(".f-testimonials__item-5", "is-active")
    .addTo(controller);

    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-d", duration: "50%"})
    .setTween(".h-collage-1", {y: "25%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-d", duration: "50%"})
    .setTween(".h-collage-2", {y: "-25%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-d", duration: "50%"})
    .setTween(".h-collage-3", {y: "-30%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-d", duration: "50%"})
    .setTween(".h-collage-5", {y: "35%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".section-d", duration: "50%"})
    .setTween(".h-collage-7", {y: "-25%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.5,triggerElement: ".section-e", duration: "50%"})
    .setTween(".h-collage-8", {y: "25%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.5,triggerElement: ".section-e", duration: "50%"})
    .setTween(".h-collage-9", {y: "20%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.5,triggerElement: ".section-e", duration: "50%"})
    .setTween(".h-collage-10", {y: "-20%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.5,triggerElement: ".section-e", duration: "50%"})
    .setTween(".h-collage-12", {y: "-30%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH * 0.5,triggerElement: ".section-e", duration: "50%"})
    .setTween(".h-collage-13", {y: "-25%", ease: Linear.easeNone})
    .addTo(controller);

    /*! Page Header */
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".header-content", duration: "100%"})
    .setTween(".header-content .block-bg", {y: "50%", ease: Linear.easeNone})
    .addTo(controller);
    new ScrollMagic.Scene({offset: viewportH,triggerElement: ".header-content", duration: "50%"})
    .setTween(".header-content .cell-wrap", {y: "30%", opacity: 0, ease: Linear.easeNone})
    .addTo(controller);

    /*! Sections Size */
    var sectionsLayout = (function () {
        var viewportW = $(window).width(),
        viewportH = $(window).height(),
        sectionIntro = $(".js-section-intro"),
        sectionFull = $(".js-section-full"),
        section50h = $(".js-section-50h"),
        section65h = $(".js-section-65h"),
        sectionCBottom = $(".js-section-c__bottom");
        sectionIntro.css({"height":viewportH * 0.7});
        sectionFull.css({"height":viewportH});
        section50h.css({"height":viewportH * 0.5});
        section65h.css({"height":viewportH * 0.65});
        sectionCBottom.css({"height":viewportW * 0.53});
    });

    $(document).ready(sectionsLayout);
    $(window).resize(sectionsLayout);

});