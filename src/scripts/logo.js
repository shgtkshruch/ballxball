(() => {
  'use strict';

  const circleR = 40;
  const ds = 0.05;
  const svgWidth = circleR * 4 * (1 + ds);
  const svgHeight = circleR * 2 * (1 + ds);
  const colorPink = '#ff1a84';
  const colorBlue = '#0f2c70';
  const duration = 2000;
  const easing = 'easeInQuad';

  const s = Snap('#logo').attr({width: svgWidth, height: svgHeight});

  const circle1 = s
    .circle(svgWidth / 2 - circleR, svgHeight / 2, circleR)
    .attr({fill: colorPink, id: 'pink'});

  const circle2 = s
    .circle(svgWidth / 2 + circleR, svgHeight / 2, circleR)
    .attr({fill: colorBlue, id: 'blue'});

  const siteName = s
    .text(0, 0, ['ball', 'x', 'ball'])
    .attr({
      'font-size': circleR / 1.5,
      fill: '#fff'
    });
  siteName.select(':nth-child(1)').attr({fill: colorBlue});
  siteName.select(':nth-child(3)').attr({fill: colorPink});

  const textWidth = siteName.getBBox().width;
  const textHeight = siteName.getBBox().height;

  siteName
    .attr({
      x: svgWidth / 2 - textWidth / 2,
      y: svgHeight / 2 + textHeight / 2 - 5
    });

  function pinkAnime1() {
    anime({
      targets: '#pink',
      scale: {
        value: 1 + ds,
        duration,
        easing
      },
      complete() {
        pinkAnime2();
      }
    });
  }

  function pinkAnime2() {
    anime({
      targets: '#pink',
      scale: {
        value: 1 - ds,
        duration,
        easing
      },
      complete() {
        pinkAnime1();
      }
    });
  }

  function blueAnime1() {
    anime({
      targets: '#blue',
      scale: {
        value: 1 - ds,
        duration,
        easing
      },
      complete() { blueAnime2(); }
    });
  }

  function blueAnime2() {
    anime({
      targets: '#blue',
      scale: {
        value: 1 + ds,
        duration,
        easing
      },
      complete() { blueAnime1(); }
    });
  }

  pinkAnime1();
  blueAnime1();

})();
