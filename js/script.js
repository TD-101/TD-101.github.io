$(document).ready(function(){

    // navigate bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });


    $('.navbar-collapse>ul>li>a').click(function(){
        $('.navbar-collapse').collapse('hide');

    });

    function vh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
      }
    
      // navbar bg change on scroll
    // $(window).scroll(function(){
    //     let pos = $(window).scrollTop();
    //     if(pos > vh(50)){
    //         $('.navbar').addClass('cng-navbar');
    //     } else {
    //         $('.navbar').removeClass('cng-navbar');
    //     }
    // });

});