(() => {
  'use strict';

  const $searchIcon = $('.search__icon');
  const $searchBox = $('.search__box');
  const duration = 200;

  $searchIcon.click(function() {
    $(this).fadeOut(duration, () => {
      $searchBox.fadeIn(duration * 2);
    });
  });
})();
