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

  var s = Snap("#siteName").attr({ width: svgWidth, height: svgHeight });
  var circle1 = s.circle(svgWidth / 2, circleR * -1, circleR).attr({ fill: colorPink });

  var circle2 = s.circle(svgWidth / 2, circleR * -1, circleR).attr({ fill: colorBlue });

  var siteName = s.text(0, 0, ['ball', 'x', 'ball']).attr({
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
      y: svgHeight / 2 + textHeight / 2 - 20
    }).animate({ opacity: 1 }, 1000, mina.easeout, scale);
  }

  function scale() {
    var duration = 350;

    anime({
      targets: '#siteName',
      delay: 450,
      scale: {
        value: 2.5,
        duration: duration
      },
      opacity: {
        value: [1, 0],
        duration: duration
      },
      easing: 'linear',
      complete: function complete() {
        var svg = document.getElementById('siteName');
        svg.style.display = 'none';
      }
    });
  }
})();