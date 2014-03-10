jQuery(function($) {
  $('.slide .fa-question-circle').popover({placement:'bottom', container:'.showcase'});
  
  $(window).scroll(function(e) {
    if ($(window).scrollTop() > 100) {
      $('.logo-wrap').addClass('off-top')
    } else {
      $('.logo-wrap').removeClass('off-top')
    }
  });
});