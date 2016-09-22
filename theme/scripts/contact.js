'use strict';

(function () {
  'use strict';

  $('.wpcf7-form-control').focus(function () {
    $(this).parent().siblings('label').addClass('is-active');
  }).focusout(function () {
    if ($(this).val().length === 0) {
      $(this).parent().siblings('label').removeClass('is-active');
    }
  });
})();