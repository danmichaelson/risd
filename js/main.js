/* JONATHAN */

$(document).ready(function(){

    var divsize = ((Math.random()*100) + 50).toFixed();

    $(".pixbox").hover(function(){

        $(this).width("800px");
        $(this).height("800px");
        $(this).css({"position":"absolute","top":"0","left":"0"});
        $('img').addClass('rotated');
        $(".pix").animate({
            "margin-left": '+=50',
            "margin-top": '+=50',

        }, 'fast');

    }, function(){
        $(this).width("160px");
        $(this).height("70px");
        $(this).css("position","static");
        $('img').removeClass('rotated');
        $(".pix").animate({
            "margin-left": '-=50',
            "margin-top": '-=50',


        }, 'fast');

    });

});

