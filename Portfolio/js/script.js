$(document).ready(function(){

    // byrger 

    
    (function($){
        $(function() {
            $('.byrger-menu__byrger-icon').on('click', function() {
                $(this).closest('.byrger-menu').toggleClass('byrger-menu_state_open');
            });
        });
    })(jQuery);

    // for Read more in Blog page

    $('.block-blog__info-blog_link1-blog').click(function () {
    $('#span1').show();

    });

    $('.block-blog__info-blog_link2-blog').click(function () {
    $('#span2').show();

    });

    $('.block-blog__info-blog_link3-blog').click(function () {
    $('#span3').show();
    
    });



});



/*$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});

.text-block {
  width: 250px;
  margin: 50px;
}

#go-top {
  position: fixed; 
  bottom: 25px; 
  right: 70px;
  text-align: center;
  cursor:pointer; 
  display:none;
  width: 80px;
  height: 30px;
  background: #c0c0c0;
  line-height: 30px;
  border-radius: 5px;
}

#go-top:hover {
  background: #333;
  color: #fff;
}*/