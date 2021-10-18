
$(document).ready(function(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    // navigate bar toggle
    
    $('.navbar-toggler').click(function(){
        // document.getElementsByClassName('navbar-collapse').style.height = '100% !important';
        // document.getElementsByClassName('navbar-nav').style.height = '100% !important';
        $('.navbar-collapse.narrow').slideToggle(300);
        //  $('.navbar-collapse').toggleClass( "active" );
        // toggle or assign class
        
    });


    $('.nav-link').click(function(){
        $('.navbar-collapse.narrow').slideToggle(300);
        // $('.navbar-collapse').toggleClass( "active" );
        
    });

    
    var $window = $(window);
        // $nav = $('.navbar-nav');
        $navcol = $('.navbar-collapse');
    
    function resize() {
        if ($window.width() < 992) {
            // $nav.addClass('narrow');
            $navcol.addClass('narrow');
        } 
        if ($window.width() > 992) {
            // $nav.removeClass('narrow');
            $navcol.removeClass('narrow');
        }
    }
    
    $window
        .resize(resize)
        .trigger('resize');
    
    

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

    var faq = document.getElementsByClassName("faq-page");
    var i;
    
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
    
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
    
});

