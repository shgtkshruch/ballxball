(() => {
  'use strict';

  const $hamburger = $('#js-hamburger');
  const $nav = $('#js-nav');

  $hamburger.click(function (e) {
    $(this).toggleClass('is-active');
    $nav.addClass('is-open').slideToggle();
  });

})();
