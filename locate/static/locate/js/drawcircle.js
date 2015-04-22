/**
 * Created by ndudley on 4/17/15.
 */

$.fn.drawCircle = function(evt, canvas, img) {
    const CIRCLE_RADIUS_TO_CANVAS_RATIO = 0.02;
    const BEGIN_RADIUS_TO_END_RADIUS_RATIO = 0.07;
    const CIRCLE_GROWTH_TO_BEGIN_RADIUS_RATIO = 2;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    var end_radius = canvas.width * CIRCLE_RADIUS_TO_CANVAS_RATIO;
    var begin_radius = end_radius * BEGIN_RADIUS_TO_END_RADIUS_RATIO;

    var offset = $(this).offset();
    var centerX = (evt.pageX - offset.left);
    var centerY = (evt.pageY - offset.top);

    var radius = begin_radius;

    draw();

    function draw() {
        context.drawImage(img, 0, 0, img.width, img.height);
        context.fillStyle = '#8FAE8F';
        context.strokeStyle = '#1F5C1F';
        context.lineWidth = "1.5";
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();


        radius += CIRCLE_GROWTH_TO_BEGIN_RADIUS_RATIO;
        if (radius < end_radius) {
            requestAnimationFrame(draw);
        }
    }
};