'use strict';

(function () {
  'use strict';

  var $search = $('.searchForm');
  var $searchLink = $('.gnav__link--search');
  var $searchInput = $('.searchForm__input');
  var duration = 200;

  $searchLink.click(function (e) {
    e.preventDefault();

    $(this).fadeOut(duration, function () {
      $search.fadeIn(duration);
      $searchInput.focus();
    });
  });
})();