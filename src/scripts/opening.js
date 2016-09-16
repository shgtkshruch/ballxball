(() => {
  'use strict';

  const svgWidth = window.innerWidth;
  const svgHeight = window.innerHeight;
  const circleR = (svgWidth > svgHeight) ? svgHeight / 5 : svgWidth / 5;
  const dy = svgHeight / 2;
  const duration = 1500;
  const colorPink = '#ff1a84';
  const colorBlue = '#0f2c70';

  const s = Snap("#siteName").attr({width: svgWidth, height: svgHeight});
  const circle1 = s
    .circle(svgWidth / 2, circleR * -1, circleR)
    .attr({fill: colorPink});

  const circle2 = s
    .circle(svgWidth / 2, circleR * -1, circleR)
    .attr({fill: colorBlue});

  const siteName = s
    .text(0, 0, ['ball', 'x', 'ball'])
    .attr({
      'font-size': circleR / 1.5,
      fill: '#fff',
      opacity: 0
    });

  siteName.select(':nth-child(1)').attr({fill: colorBlue});
  siteName.select(':nth-child(3)').attr({fill: colorPink});

  circle1.animate({cy: dy}, duration, mina.bounce);
  circle2.animate({cy: dy}, duration, mina.bounce, move);

  function move() {
    circle1.animate({cx: svgWidth / 2 - circleR}, 800, mina.easeinout);
    circle2.animate({cx: svgWidth / 2 + circleR}, 800, mina.easeinout, text);
  }

  function text() {
    const textWidth = siteName.getBBox().width;
    const textHeight = siteName.getBBox().height;

    siteName
      .attr({
        x: svgWidth / 2 - textWidth / 2,
        y: svgHeight / 2 + textHeight / 2 - 20,
      })
      .animate({opacity: 1}, 1000, mina.easeout, scale);
  }

  function scale() {
    const duration = 350;
    const delay = 450;

    anime({
      targets: '#siteName',
      delay,
      scale: {
        value: 2.5,
        duration
      },
      opacity: {
        value: [1, 0],
        duration
      },
      height: {
        value: 0,
        duration: 200,
        delay: delay + duration
      },
      easing: 'linear',
      complete() { slideUp(); }
    });
  }

  function slideUp() {
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
      article.classList.add('article--slideUp');
    });

    const svg = document.getElementById('siteName');
    svg.style.display = 'none';
  }

})();
