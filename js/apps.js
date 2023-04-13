let img = document.querySelector('.img');
let leftContentImg = document.querySelector('.left_content-img');

document.onmousemove = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientX / window.innerHeight;

    img.style.transform = "translate(-" + x * 24 + "px, -" + y * 15 + "px)";
    leftContentImg.style.transform = "translate(-" + x * 24 + "px, -" + y * 17 + "px)";
};

$('.mobile_menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu_active');
    $('.menu_wrap').toggleClass('menu_active');
    // $('body').toggleClass('hidden')

});