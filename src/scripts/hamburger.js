(() => {
  'use strict';

  const $hamburger = $('#js-hamburger');
  const $gnav = $('#js-gnav');

  $hamburger.click(function (e) {
    $(this).toggleClass('is-active');
    $gnav.addClass('is-open').slideToggle();
  });

})();
