'use strict';

(function () {
  'use strict';

  var $searchIcon = $('.search__icon');
  var $searchBox = $('.search__box');
  var duration = 200;

  $searchIcon.click(function () {
    $(this).fadeOut(duration, function () {
      $searchBox.fadeIn(duration * 2);
    });
  });
})();