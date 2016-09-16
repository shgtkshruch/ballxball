(() => {
  'use strict';

  const searchIcon = document.querySelector('.search__icon');
  const searchBox = document.querySelector('.search__box');

  searchIcon.addEventListener('click', function () {
    searchBox.classList.add('search__box--show');
    this.classList.add('search__icon--hide');
  }, false);
})();
