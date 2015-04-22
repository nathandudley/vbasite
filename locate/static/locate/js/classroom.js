/**
* Created by ndudley on 4/16/15.
*/
$(function() {

    var canvas = document.getElementById('classroom-layout');
    var context = canvas.getContext('2d');
    var img = document.getElementById('background-img');

    var img_original_width = img.width;
    var img_original_height = img.height;

//    console.log($('#classroom-layout').width);
//
//    if ($('#classroom-layout').width === 0) {
//        location.reload();
//    }

    drawCanvas();

    $('#classroom-layout').off('click').on('click', function(evt) {
        $(this).drawCircle(evt, canvas, img);
    });

   $(window).resize(function() {
        drawCanvas()
    });

    function drawCanvas() {
        var parent = img.parentNode;
        var ratio = img.width / img.height;

        if (img_original_width > parent.offsetWidth - 100) {
            img.width = parent.offsetWidth - 100;
            img.height = img.width / ratio;
            canvas.width = parent.offsetWidth - 100;
            canvas.height = canvas.width / ratio;
        } else {
            img.width = img_original_width;
            img.height = img_original_height;
            canvas.width = img_original_width;
            canvas.height = img_original_height;
        }

        context.drawImage(img, 0, 0, img.width, img.height);
    }
});