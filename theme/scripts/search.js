'use strict';

(function () {
  'use strict';

  var $search = $('.search');
  var $searchFrom = $('.search__form');
  var $searchInput = $('.search__input');
  var $searchBg = $('.search__bg');
  var duration = 200;

  $search.click(function (e) {
    e.preventDefault();

    $(this).fadeOut(duration, function () {
      $searchFrom.fadeIn(duration);
      $searchBg.fadeIn(duration);
      $searchInput.focus();
    });
  });
})();