jQuery(document).ready(function(){

  "use strict";

  $('#slider-carousel').carouFredSel({

    responsive:true,
    width:'100%',
    circular:true,
    scroll:{
      item:1,
      duration:500,
      pauseOnHover: true
    },
    auto:true,
    item:{
      visible:{
        min:1,
        max:1
      },
      height:"variable"
    },
    pagination:{
      container:".sliderpager",
      anchorBuilder:false
    }

  });
  $('.portfolio-carousel').carouFredSel({

    responsive:true,
    width:'100%',
    circular:true,
    scroll:{
      item:1,
      duration:500,
      pauseOnHover: true
    },
    auto:true,
    item:{
      visible:{
        min:1,
        max:4
      },
      height:"variable"
    }

  });
  $(window).scroll(function(){

      var top = $(window).scrollTop();
      if(top>=60){
        $("header").addClass('secondary-dark-blue-bg');
      }

      else
        if($("header").hasClass('secondary-dark-blue-bg')){
          $("header").removeClass('secondary-dark-blue-bg');
        }

  });

});
