(() => {
  'use strict';

  const $searchIcon = $('.iconList__icon.fa-search');
  const $search = $('.search');
  const duration = 200;

  $searchIcon.click(function(e) {
    e.preventDefault();

    if ($(this).hasClass('fa-search')) {
      $(this).removeClass('fa-search').addClass('fa-close');
      $search.slideDown(duration);
    } else {
      $(this).removeClass('fa-close').addClass('fa-search');
      $search.slideUp(duration);
    }
  });
})();
