'use strict';

(function () {
  'use strict';

  var circleR = 40;
  var ds = 0.05;
  var svgWidth = 620;
  var svgHeight = circleR * 2 * (1 + ds);
  var colorPink = '#ff1a84';
  var colorBlue = '#0f2c70';

  var s = Snap('#logo').attr({ width: svgWidth, height: svgHeight });

  var circle1 = s.circle(svgWidth / 2 - circleR, svgHeight / 2, circleR).attr({ fill: colorPink, id: 'pink' });

  var circle2 = s.circle(svgWidth / 2 + circleR, svgHeight / 2, circleR).attr({ fill: colorBlue, id: 'blue' });

  var siteName = s.text(0, 0, ['ball', 'x', 'ball']).attr({
    'font-size': circleR / 1.5,
    fill: '#fff'
  });
  siteName.select(':nth-child(1)').attr({ fill: colorBlue });
  siteName.select(':nth-child(3)').attr({ fill: colorPink });

  var textWidth = siteName.getBBox().width;
  var textHeight = siteName.getBBox().height;

  siteName.attr({
    x: svgWidth / 2 - textWidth / 2,
    y: svgHeight / 2 + textHeight / 2 - 5
  });

  var duration = 2000;
  var easing = 'easeInQuad';

  console.log(anime.easings);

  function pinkAnime1() {
    anime({
      targets: '#pink',
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
      targets: '#pink',
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
      targets: '#blue',
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
      targets: '#blue',
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
})();