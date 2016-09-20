(() => {
  'use strict';

  const $search = $('.search');
  const $searchFrom = $('.search__form');
  const $searchInput = $('.search__input');
  const $searchBg = $('.search__bg');
  const duration = 200;

  $search.click(function(e) {
    e.preventDefault();

    $(this).fadeOut(duration, () => {
      $searchFrom.fadeIn(duration);
      $searchBg.fadeIn(duration);
      $searchInput.focus();
    });
  });
})();
