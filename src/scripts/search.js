(() => {
  'use strict';

  const $search = $('.searchForm');
  const $searchLink = $('.gnav__link--search');
  const $searchInput = $('.searchForm__input');
  const duration = 200;

  $searchLink.click(function(e) {
    e.preventDefault();

    $(this).fadeOut(duration, () => {
      $search.fadeIn(duration);
      $searchInput.focus();
    });
  });
})();
