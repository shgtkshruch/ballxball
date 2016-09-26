'use strict';

(function () {
  'use strict';

  if (!$('body').hasClass('single')) return;

  var $title = $('.post__title');
  var text = $title.text();
  var titleHeight = $title.height();
  var onelineHeight = $title.text('あ').height();

  $title.text(text);

  if (onelineHeight < titleHeight) {
    $title.css({ 'text-align': 'left' });
  }
})();