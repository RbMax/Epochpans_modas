$(document).ready(function(){
    if($(".pans_slider").length){
        $(".pans_slider").owlCarousel({
            margin: 30,
            loop: true,
            dots: true,
            nav: true,
            items: 2,
            navText: ['', ''],
            responsive: {
                0 : {
                    items: 1
                },
                640 : {
                    items: 2
                }
            }
        });
    }
    // Бургер
    $(function() {
        $('._js_burger, .overlay').click(function() {
            // $('body, header').css('margin-right', (window.innerWidth - document.documentElement.clientWidth));
            $('._js_burger').toggleClass('clicked');
            $('._js_burger-popup').toggleClass('show');
            $('body').toggleClass('overflow');
            $('.overlay').toggleClass('show');
        });
    });
    $(document).on('click','.burger-parent-nav',function(event){
        event.preventDefault();
        $(this).toggleClass('active');
    });
});