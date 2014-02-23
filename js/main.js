/* VIDEO ROLLOVER */

$(document).ready(function() {

    var rollover_videos = $("video.module").not("#jenny");
    var shuffle_modules = $(".module").not("#jonathan");

    // When you mouse over a video, pause all other videos
    rollover_videos.hover(function() {
        rollover_videos.not($(this)).each(function() {
            this.pause();
        });
        this.play();
    // When you mouse out, play all videos again
    }, function() {
        rollover_videos.each(function() {
            this.play();
        })
    });

    // When you mouse over an interactive, pause all videos
    $("#jonathan, #jarel, #ojus").hover(function() {
        rollover_videos.each(function() {
            this.pause();
        });
    // When you mouse out, play all videos again
    }, function() {
        rollover_videos.each(function() {
            this.play();
        })
    });

    // When Jenny's timer ends, shuffle the position of all modules, and restart the timer
    // Jonathan has to remain in position 1
    $("#jenny").on("ended", function() {
        var position_classes = _.map(_.shuffle(_.range(2, 21)), function(position) {
            return 'position' + position
        });
        shuffle_modules.each(function(i) {
            $(this).removeClass(position_classes.join(' ')).addClass(position_classes[i]);
        });
        this.currentTime = 0;
        this.play();
    })

});

/* JONATHAN */

$(document).ready(function(){

    $(".hoverbox").hover(function(){

        $(".pixbox").width("1000px");
        $(".pixbox").height("1000px");
        $(".pixbox").css({"position":"absolute","top":"0","left":"0"});
        $('pix').addClass('rotated');
        $(".pix").animate({
            "margin-left": '+=65',
            "margin-top": '+=65',

        }, 'fast');

    }, function(){
        $(".pixbox").width("160px");
        $(".pixbox").height("70px");
        $(".pixbox").css("position","static");
        $('pix').removeClass('rotated');
        $(".pix").animate({
            "margin-left": '-=65',
            "margin-top": '-=65',

        }, 'fast');

    });

});

