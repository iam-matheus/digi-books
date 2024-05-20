
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });


    // $(".anchorElement").click(function(){

    //   var formdata = new FormData();
    //   formdata.append("type", "Veetical Strip");
    //   formdata.append("tags", "books,book club,reading,best read");

    //   var ajax = new XMLHttpRequest();
    //   ajax.addEventListener("load", completeHandler, false);

    //   ajax.open("POST", "https://ad.simaneka.com/api/get");
    //   ajax.setRequestHeader("authorisation", "i5e6Zinc3qn5loTPD1QZ6ugmOwLET8jX");

    //   ajax.send(formdata);

    //   function completeHandler(event) {
    //       var response = JSON.parse(event.target.responseText);

    //       console.log(response);
    //       document.querySelector('.advertIMG').src = response.link;
    //       document.querySelector('.advertIMG').alt = response.alt;
    //       document.querySelector('.anchorElement').href = response.href;
    //       document.querySelector('.headerText').innerHTML = response.message;
    //   }
          
    // })
  
  })(window.jQuery);


