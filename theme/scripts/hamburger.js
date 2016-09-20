'use strict';

(function () {
  'use strict';

  var $hamburger = $('#js-hamburger');
  var $nav = $('#js-nav');

  $hamburger.click(function (e) {
    $(this).toggleClass('is-active');
    $nav.addClass('is-open').slideToggle();
  });
})();