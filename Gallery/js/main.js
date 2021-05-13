$(document).ready(function(){
    var bigImage = $('.big img');
    var button = $('.button');
    var gallery = $('.gallery');
    $('.small a').click(function(e){
        e.preventDefault();
        var currentImgSrc = $(this).attr('href');
        bigImage.attr('src',currentImgSrc);
        $('.small a').css({
            border: 'none'
        }).fadeTo(500,1);
        $(this).css({
            border: '1px dotted red',
        }).fadeTo(500,0.5);
    });

    button.click(function(e){
        e.preventDefault();
        gallery.slideToggle(500);
        if(button.text() === '-'){
            button.text('+');
        }
        else {
            button.text('-');
        }
    });
});