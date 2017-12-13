/**
 * Created by Mauri on 10.12.17.
 */



$(document).ready(function(){
    jQuery('.grid-item').hover(
        function(){
            $(this).find(".cover__item__gallery").fadeIn();
        },
        function(){
            $(this).find(".cover__item__gallery").fadeOut();
        }
    );


var sizer = '.sizer4';

var container = $('.grid');


        container.masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 0,
            layoutMode: 'horiz',
            percentPosition:true
        });

//slider1
    $(function(){
        $('.sl').slick({
            dots:false
        });
    });

    //slider2
    $(function(){
        $('.sl2').slick({
            dots:true
        });
    });
});