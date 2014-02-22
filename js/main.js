/* VIDEO ROLLOVER */

$(document).ready(function() {

    var rollover_videos = $("video.module").not("#jenny");

    rollover_videos.hover(function() {
        rollover_videos.not($(this)).each(function() {
            this.pause();
        });
        this.play();
    }, function() {
        rollover_videos.each(function() {
            this.play();
        })
    })

    $("#jonathan, #jarel").hover(function() {
        rollover_videos.each(function() {
            this.pause();
        });
    }, function() {
        rollover_videos.each(function() {
            this.play();
        })
    })

});

/* JONATHAN */

$(document).ready(function() {

    var divsize = ((Math.random()*100) + 50).toFixed();

    $(".pixbox").hover(function(){

        $(this).width("800px");
        $(this).height("800px");
        $(this).css({"position":"absolute","top":"0","left":"0"});
        $("#jonathan img").addClass('rotated');
        $(".pix").animate({
            "margin-left": '+=50',
            "margin-top": '+=50',

        }, 'fast');

    }, function(){
        $(this).width("160px");
        $(this).height("70px");
        $(this).css("position","static");
        $("#jonathan img").removeClass('rotated');
        $(".pix").animate({
            "margin-left": '-=50',
            "margin-top": '-=50',


        }, 'fast');

    });

});

