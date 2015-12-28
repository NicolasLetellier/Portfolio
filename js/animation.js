
$(document).ready(function() {

  var divrondweb = $('#divcirculoweb');
  var folioweb = $('.folioweb');
  var divrondgraphic = $('#divcirculographic');
  var foliographic = $('.foliographic');

  $('#h2web').on('click', function() {
    if (divrondweb.hasClass("cerrado")) {
	  $('html,body').animate({
        scrollTop: divrondweb.offset().top - 30
      });
	  folioweb.slideDown();
      divrondweb.removeClass("cerrado").addClass("abierto");
      if (divrondgraphic.hasClass("cerrado")) {
        divrondweb.removeClass("medium-5 medium-offset-1 large-4 large-offset-2");
        divrondgraphic.removeClass("medium-5 large-4");
      };
    } else {
      folioweb.slideUp( function() {
        if (divrondgraphic.hasClass("cerrado")) {
          divrondweb.addClass("medium-5 medium-offset-1 large-4 large-offset-2");
          divrondgraphic.addClass("medium-5 large-4");
	    };
      });
	  divrondweb.removeClass("abierto").addClass("cerrado");
	  if (divrondgraphic.hasClass("cerrado")) {
      $('html,body').animate({
        scrollTop: 0
      }, 600);
	  };
	};
  });


  $('#h2graphic').on('click', function() {
    if (divrondgraphic.hasClass("cerrado")) {
	  foliographic.slideDown();
      divrondgraphic.removeClass("cerrado").addClass("abierto");
      if (divrondweb.hasClass("cerrado")) {
        divrondweb.removeClass("medium-5 medium-offset-1 large-4 large-offset-2");
        divrondgraphic.removeClass("medium-5 large-4");
      };
	  $('html,body').animate({
        scrollTop: divrondgraphic.offset().top - 30
      }, 600);
    } else {
      foliographic.slideUp(function() {
        if (divrondweb.hasClass("cerrado")) {
          divrondweb.addClass("medium-5 medium-offset-1 large-4 large-offset-2");
          divrondgraphic.addClass("medium-5 large-4");
	    };
      });
	  divrondgraphic.removeClass("abierto").addClass("cerrado");
	  if (divrondweb.hasClass("cerrado")) {
      $('html,body').animate({
        scrollTop: 0
      }, 800);
	  };
	};
  });

});

