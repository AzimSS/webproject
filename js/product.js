$('.mobile_menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu_active');
    $('.menu_wrap').toggleClass('menu_active');
    // $('body').toggleClass('hidden')

});