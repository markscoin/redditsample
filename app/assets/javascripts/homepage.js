/**
 * Created by Mark on 5/23/15.
 */

$(function() {
  // header search bar animation
  var search = $('.search');
  search.focus(function() {
    $('.search').animate({width: "+=200"}, 500);
  });
  search.focusout(function() {
    $('.search').animate({width: "-=200"}, 500);
  });
});


