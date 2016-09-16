'use strict';

(function () {
  'use strict';

  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;
  var circleR = svgWidth > svgHeight ? svgHeight / 5 : svgWidth / 5;
  var dy = svgHeight / 2;
  var duration = 1500;
  var colorPink = '#ff1a84';
  var colorBlue = '#0f2c70';

  var s = Snap("#logo").attr({ width: svgWidth, height: svgHeight });
  var circle1 = s.circle(svgWidth / 2, circleR * -1, circleR).attr({ fill: colorPink, id: 'circlePink' });

  var circle2 = s.circle(svgWidth / 2, circleR * -1, circleR).attr({ fill: colorBlue, id: 'circleBlue' });

  var siteName = s.text(0, 0, ['ball', 'x', 'ball']).attr({
    id: 'logoText',
    'font-size': circleR / 1.5,
    fill: '#fff',
    opacity: 0
  });

  siteName.select(':nth-child(1)').attr({ fill: colorBlue });
  siteName.select(':nth-child(3)').attr({ fill: colorPink });

  circle1.animate({ cy: dy }, duration, mina.bounce);
  circle2.animate({ cy: dy }, duration, mina.bounce, move);

  function move() {
    circle1.animate({ cx: svgWidth / 2 - circleR }, 800, mina.easeinout);
    circle2.animate({ cx: svgWidth / 2 + circleR }, 800, mina.easeinout, text);
  }

  function text() {
    var textWidth = siteName.getBBox().width;
    var textHeight = siteName.getBBox().height;

    siteName.attr({
      x: svgWidth / 2 - textWidth / 2,
      y: svgHeight / 2 + textHeight / 2 - 30
    }).animate({ opacity: 1 }, 1000, mina.easeout, scale);
  }

  function scale() {
    var circleR = 40;
    var ds = 0.05;
    var svgWidth = circleR * 4 * (1 + ds);
    var svgHeight = circleR * 2 * (1 + ds);
    var textWidth = 104;
    var textHeight = 31;
    var duration = 500;
    var easing = 'linear';

    anime({
      targets: '#logo',
      width: {
        value: svgWidth,
        duration: duration,
        easing: 'linear'
      },
      height: {
        value: svgHeight,
        duration: duration,
        easing: easing
      }
    });

    anime({
      targets: '#circlePink ',
      cx: svgWidth / 2 - circleR,
      cy: svgHeight / 2,
      r: circleR,
      duration: duration,
      easing: easing
    });

    anime({
      targets: '#circleBlue ',
      cx: svgWidth / 2 + circleR,
      cy: svgHeight / 2,
      r: circleR,
      duration: duration,
      easing: easing
    });

    anime({
      targets: '#logoText ',
      x: svgWidth / 2 - textWidth / 2,
      y: svgHeight / 2 + textHeight / 2 - 5,
      'font-size': circleR / 1.5,
      duration: duration,
      easing: easing,
      complete: function complete() {
        slideUp();
      }
    });
  }

  function slideUp() {
    var articles = document.querySelectorAll('.article');
    articles.forEach(function (article) {
      article.classList.add('article--slideUp');
    });
    var header = document.querySelector('.header');
    header.classList.add('header--animationEnd');

    var headerBottom = document.querySelector('.header__bottom');
    headerBottom.classList.add('header__bottom--slideUp');

    animation();
  }

  function animation() {
    var ds = 0.05;
    var duration = 2000;
    var easing = 'easeInQuad';

    function pinkAnime1() {
      anime({
        targets: '#circlePink',
        scale: {
          value: 1 + ds,
          duration: duration,
          easing: easing
        },
        complete: function complete() {
          pinkAnime2();
        }
      });
    }

    function pinkAnime2() {
      anime({
        targets: '#circlePink',
        scale: {
          value: 1 - ds,
          duration: duration,
          easing: easing
        },
        complete: function complete() {
          pinkAnime1();
        }
      });
    }

    function blueAnime1() {
      anime({
        targets: '#circleBlue',
        scale: {
          value: 1 - ds,
          duration: duration,
          easing: easing
        },
        complete: function complete() {
          blueAnime2();
        }
      });
    }

    function blueAnime2() {
      anime({
        targets: '#circleBlue',
        scale: {
          value: 1 + ds,
          duration: duration,
          easing: easing
        },
        complete: function complete() {
          blueAnime1();
        }
      });
    }

    pinkAnime1();
    blueAnime1();
  }
})();