/**
 * Created by ndudley on 8/24/15.
 */

$(function() {

    var canvas = document.getElementById('classroom-layout');
    var context = canvas.getContext('2d');
    var img = document.getElementById('background-img');

    var img_original_width = img.width;
    var img_original_height = img.height;

    drawCanvas();

    $(window).resize(function () {
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

    raw_array = $.parseJSON(data_from_django);
    coord_array = [];

    for (index = 0; index < raw_array.length; ++index) {
        coord_array.push(raw_array[index].fields);
    }

    for (index = 0; index < coord_array.length; ++index) {
        $('#classroom-layout').drawCircle(coord_array[index].xcoord, coord_array[index].ycoord, canvas, img);
    }

});
