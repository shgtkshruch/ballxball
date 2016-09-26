(() => {
  'use strict';

  if (!$('body').hasClass('single')) return;

  const $title = $('.post__title');
  const text = $title.text();
  const titleHeight = $title.height();
  const onelineHeight = $title.text('あ').height();

  $title.text(text);

  if (onelineHeight < titleHeight) {
    $title.css({'text-align': 'left'});
  }

})();
