'use strict';

(function () {
  'use strict';

  var $hamburger = $('#js-hamburger');
  var $gnav = $('#js-gnav');

  $hamburger.click(function (e) {
    $(this).toggleClass('is-active');
    $gnav.addClass('is-open').slideToggle();
  });
})();