//nav bar
$(document).ready(function() {
    var nav = document.getElementById('nav');
    	window.onscroll = function(){
    		if(window.pageYOffset >10){
    			nav.style.background = "#fff";
    			nav.style.boxShadow = "0px 0px 10px #000";
    		}
    		else{
    			nav.style.background = "transparent";
    			nav.style.boxShadow = "none";
    		}
    	}

        $("nav ul li a").click(function(){
            $(".navbar-collapse").removeClass("show");
        });
});
//navbar end

//barfiller start	
$(window).scroll(function(){
    $('#bar1').barfiller({
    	barColor:"linear-gradient(-45deg,rgba(88, 195, 255,.8) 0,rgba(0, 77, 230,.8) 40%,rgba(0, 59, 177,.8) 100%)"
    });
    $('#bar2').barfiller({
    	barColor:"linear-gradient(-45deg,rgba(88, 195, 255,.8) 0,rgba(0, 77, 230,.8) 40%,rgba(0, 59, 177,.8) 100%)"
    });
    $('#bar3').barfiller({
    	barColor:"linear-gradient(-45deg,rgba(88, 195, 255,.8) 0,rgba(0, 77, 230,.8) 40%,rgba(0, 59, 177,.8) 100%)"
    });
    $('#bar4').barfiller({
    	barColor:"linear-gradient(-45deg,rgba(88, 195, 255,.8) 0,rgba(0, 77, 230,.8) 40%,rgba(0, 59, 177,.8) 100%)"
    });
    $('#bar5').barfiller({
    	barColor:"linear-gradient(-45deg,rgba(88, 195, 255,.8) 0,rgba(0, 77, 230,.8) 40%,rgba(0, 59, 177,.8) 100%)"
    });
//magnific popup
  $('.image-link').magnificPopup({
	  	type:'image',
	  	gallery:{
	    enabled:true
	  }
	});
//magnific popup end
});
//barfiller end

//isotop start
$('.grid').isotope({
	  // options
	  itemSelector: '.grid-item'
	});
$('.portfolio-menu ul li').on('click',function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: selector
    });
    return false;
    
});
//isotop end
//counter start
$('.count').counterUp({
    delay: 10,
    time: 1000
});
//counter end
$(window).on('scroll',function(){
    if($(document).scrollTop() > 400){
        $(".top").removeClass("d-none");
    }
    else{
        $(".top").addClass("d-none");
    }
});
