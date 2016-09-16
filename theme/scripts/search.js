'use strict';

(function () {
  'use strict';

  var searchIcon = document.querySelector('.search__icon');
  var searchBox = document.querySelector('.search__box');

  searchIcon.addEventListener('click', function () {
    searchBox.classList.add('search__box--show');
    this.classList.add('search__icon--hide');
  }, false);
})();