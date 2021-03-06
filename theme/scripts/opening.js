'use strict';

(function () {
  'use strict';

  var $body = $('body');
  var colorPink = '#ff1a84';
  var colorBlue = '#0f2c70';

  if (!$body.hasClass('opening')) {
    var _circleR = 40;
    var ds = 0.05;
    var _svgWidth = _circleR * 4 * (1 + ds);
    var _svgHeight = _circleR * 2 * (1 + ds);

    var _s = Snap("#logo");

    _s.select('desc').remove();

    var _circle = _s.circle(_svgWidth / 2 - _circleR, _svgHeight / 2, _circleR).attr({ fill: colorPink, id: 'circlePink' });

    var _circle2 = _s.circle(_svgWidth / 2 + _circleR, _svgHeight / 2, _circleR).attr({ fill: colorBlue, id: 'circleBlue' });

    var _siteName = _s.text(_svgWidth / 2, _svgHeight / 2, ['ball', 'x', 'ball']).attr({
      id: 'logoText',
      'font-size': _circleR / 1.5,
      fill: '#fff'
    });
    _siteName.select(':nth-child(1)').attr({ fill: colorBlue });
    _siteName.select(':nth-child(3)').attr({ fill: colorPink });

    animation();

    return;
  }

  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;
  var circleR = svgWidth > svgHeight ? svgHeight / 5 : svgWidth / 5;
  var duration = 1500;

  var s = Snap("#logo").attr({ width: svgWidth, height: svgHeight });

  s.select('desc').remove();

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

  circle1.animate({ cy: svgHeight / 2 }, duration, mina.bounce);
  circle2.animate({ cy: svgHeight / 2 }, duration, mina.bounce, move);

  function move() {
    circle1.animate({ cx: svgWidth / 2 - circleR }, 800, mina.easeinout);
    circle2.animate({ cx: svgWidth / 2 + circleR }, 800, mina.easeinout, text);
  }

  function text() {
    siteName.attr({
      x: svgWidth / 2,
      y: svgHeight / 2
    }).animate({ opacity: 1 }, 1000, mina.easein, scale);
  }

  function scale() {
    var circleR = 40;
    var ds = 0.05;
    var svgWidth = circleR * 4 * (1 + ds);
    var svgHeight = circleR * 2 * (1 + ds);
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
      x: svgWidth / 2,
      y: svgHeight / 2,
      'font-size': circleR / 1.5,
      duration: duration,
      easing: easing,
      complete: function complete() {
        slideUp();
      }
    });
  }

  function slideUp() {

    $('.article').each(function (i, article) {
      return $(article).addClass('article--slideUp');
    });

    $('.header').addClass('header--animationEnd');

    $('#js-gnav').addClass('gnav--slideUp');

    $('.aside__item').addClass('aside__item--slideUp');

    setTimeout(function () {
      $body.removeClass('opening');
    }, 150 * 5);

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