(() => {
  'use strict';

  const $body = $('body');
  const colorPink = '#ff1a84';
  const colorBlue = '#0f2c70';

  if (!$body.hasClass('opening')) {
    const circleR = 40;
    const ds = 0.05;
    const svgWidth = circleR * 4 * (1 + ds);
    const svgHeight = circleR * 2 * (1 + ds);

    const s = Snap("#logo")

    s.select('desc').remove();

    const circle1 = s
      .circle(svgWidth / 2 - circleR, svgHeight / 2, circleR)
      .attr({fill: colorPink, id: 'circlePink'});

    const circle2 = s
      .circle(svgWidth / 2 + circleR, svgHeight / 2, circleR)
      .attr({fill: colorBlue, id: 'circleBlue'});

    const siteName = s
      .text(svgWidth / 2, svgHeight / 2, ['ball', 'x', 'ball'])
      .attr({
        id: 'logoText',
        'font-size': circleR / 1.5,
        fill: '#fff',
      });
    siteName.select(':nth-child(1)').attr({fill: colorBlue});
    siteName.select(':nth-child(3)').attr({fill: colorPink});

    animation();

    return;
  }

  const svgWidth = window.innerWidth;
  const svgHeight = window.innerHeight;
  const circleR = (svgWidth > svgHeight) ? svgHeight / 5 : svgWidth / 5;
  const duration = 1500;

  const s = Snap("#logo").attr({width: svgWidth, height: svgHeight});

  s.select('desc').remove();

  const circle1 = s
    .circle(svgWidth / 2, circleR * -1, circleR)
    .attr({fill: colorPink, id: 'circlePink'});

  const circle2 = s
    .circle(svgWidth / 2, circleR * -1, circleR)
    .attr({fill: colorBlue, id: 'circleBlue'});

  const siteName = s
    .text(0, 0, ['ball', 'x', 'ball'])
    .attr({
      id: 'logoText',
      'font-size': circleR / 1.5,
      fill: '#fff',
      opacity: 0
    });

  siteName.select(':nth-child(1)').attr({fill: colorBlue});
  siteName.select(':nth-child(3)').attr({fill: colorPink});

  circle1.animate({cy: svgHeight / 2}, duration, mina.bounce);
  circle2.animate({cy: svgHeight / 2}, duration, mina.bounce, move);

  function move() {
    circle1.animate({cx: svgWidth / 2 - circleR}, 800, mina.easeinout);
    circle2.animate({cx: svgWidth / 2 + circleR}, 800, mina.easeinout, text);
  }

  function text() {
    siteName
      .attr({
        x: svgWidth / 2,
        y: svgHeight / 2
      })
      .animate({opacity: 1}, 1000, mina.easein, scale);
  }

  function scale() {
    const circleR = 40;
    const ds = 0.05;
    const svgWidth = circleR * 4 * (1 + ds);
    const svgHeight = circleR * 2 * (1 + ds);
    const duration = 500;
    const easing = 'linear';

    anime({
      targets: '#logo',
      width: {
        value: svgWidth,
        duration,
        easing: 'linear'
      },
      height: {
        value: svgHeight,
        duration,
        easing
      }
    });

    anime({
      targets: '#circlePink ',
      cx: svgWidth / 2 - circleR,
      cy: svgHeight / 2,
      r: circleR,
      duration,
      easing
    });

    anime({
      targets: '#circleBlue ',
      cx: svgWidth / 2 + circleR,
      cy: svgHeight / 2,
      r: circleR,
      duration,
      easing
    });

    anime({
      targets: '#logoText ',
      x: svgWidth / 2,
      y: svgHeight / 2,
      'font-size': circleR / 1.5,
      duration,
      easing,
      complete() { slideUp(); }
    });
  }

  function slideUp() {

    $('.article').each((i, article) => $(article).addClass('article--slideUp'));

    $('.header').addClass('header--animationEnd');

    $('#js-gnav').addClass('gnav--slideUp');

    $('.aside__item').addClass('aside__item--slideUp');

    setTimeout(() => {
      $body.removeClass('opening');
    }, 150 * 5);

    animation();
  }

  function animation() {
    const ds = 0.05;
    const duration = 2000;
    const easing = 'easeInQuad';

    function pinkAnime1() {
      anime({
        targets: '#circlePink',
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
        targets: '#circlePink',
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
        targets: '#circleBlue',
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
        targets: '#circleBlue',
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
  }

})();
