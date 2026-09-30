$(document).ready(function () {
        box_left = ($(window).width() - $('#box').width()) / 2;
        $('#box,#footer').css({'left': box_left, 'position':'absolute'});
});
function shock()
{      
    for (i = 1; i < 7; i++)
    {
        $('#box').animate({
            'left': '-=15'
        }, 3, function() {
            $(this).animate({
                'left': '+=30'
            }, 3, function() {
                $(this).animate({
                    'left': '-=15'
                }, 3, function() {
                    $(this).animate({
                        'left': box_left
                    }, 3, function() {
                        // shock end
                    });
                });
            });
        });
    }
}
