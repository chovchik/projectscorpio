$('.team__slide').slick({
	 infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    
  ]



});



$('#js__div-btn').on('click', function(e) {
      $('#more__images').slideToggle(function() {
        $(e.target).text($(this).is(':visible') ? 'NONE' : 'MORE VIEW');
      });
});

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);
