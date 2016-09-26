'use strict';

(function () {
  'use strict';

  var $formControl = $('.wpcf7-form-control');

  if ($formControl.length === 0) return;

  $('.wpcf7-form-control').focus(function () {
    $(this).parent().siblings('label').addClass('is-active');
  }).focusout(function () {
    if ($(this).val().length === 0) {
      $(this).parent().siblings('label').removeClass('is-active');
    }
  });
})();