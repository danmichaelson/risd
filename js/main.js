/* VIDEO ROLLOVER */

$(document).ready(function() {

    var rollover_videos = $(".interactive video.module").not("#jenny");
    var shuffle_modules = $(".interactive .module").not("#jonathan");

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
    $(".interactive").find("#jonathan, #jarel, #ojus").hover(function() {
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
    $(".interactive #jenny").on("ended", function() {
        var position_classes = _.map(_.shuffle(_.range(2, 21)), function(position) {
            return 'position' + position
        });
        shuffle_modules.each(function(i) {
            $(this).removeClass(position_classes.join(' ')).addClass(position_classes[i]);
        });
        this.currentTime = 0;
        this.play();
    });

});

/* JONATHAN */

$(document).ready(function(){

    $("#jonathan .hoverbox").hover(function(){

        $("#jonathan .pixbox").width("1000px");
        $("#jonathan .pixbox").height("1000px");
        $("#jonathan .pixbox").css({"position":"absolute","top":"0","left":"0"});
        $('#jonathan .pix').addClass('rotated');
        $("#jonathan .pix").animate({
            "margin-left": '+=65',
            "margin-top": '+=65',

        }, 'fast');

    }, function(){
        $("#jonathan .pixbox").width("160px");
        $("#jonathan .pixbox").height("70px");
        $("#jonathan .pixbox").css("position","static");
        $('#jonathan .pix').removeClass('rotated');
        $("#jonathan .pix").animate({
            "margin-left": '-=65',
            "margin-top": '-=65',

        }, 'fast');

    });

});

/* OJUS */

$(document).ready(function(){
    $("#ojus #start").hover(function() {
        $("#ojus #bluebutton").css("display", "none");
        $("#ojus #yellowbutton").css("display","block");
    }, function() {
        $("#ojus #bluebutton").css("display", "block");
        $("#ojus #yellowbutton").css("display","none");
    });

    //if there is a click within the designated area, get the id of current element and change both id and src code

    var clicks1 = 0;
    var clicks2 = 0;

    $("#ojus #container").mouseenter(function() {

        $("#ojus .content").unbind("click").click(function() {

            clicks1 += 1;

            switch(this.id) {
                case "start":
                    $("#ojus #start").css("display", "none");
                    $("#ojus #slide1").css("display", "block");
                    clicks2 += 1;
                    break;
                case "slide1":
                    $("#ojus #slide1").attr('src', 'img/ojus/slide2.gif');
                    $(this).attr('id', 'slide2');
                    clicks2 += 1;
                    break;
                case "slide2":
                    $("#ojus #slide2").attr('src', 'img/ojus/slide3.gif');
                    $(this).attr('id', 'slide3');
                    clicks2 += 1;
                    break;
                case "slide3":
                    $("#ojus #slide3").attr('src', 'img/ojus/slide4.gif');
                    $(this).attr('id', 'slide4');
                    clicks2 += 1;
                    break;
                case "slide4":
                    $("#ojus #slide4").attr('src', 'img/ojus/slide5.gif');
                    $(this).attr('id', 'slide5');
                    clicks2 += 1;
                    break;
                case "slide5":
                    $("#ojus #slide5").attr('src', 'img/ojus/slide6.gif');
                    $(this).attr('id', 'slide6');
                    clicks2 += 1;
                    break;
                case "slide6":
                    $("#ojus #slide6").attr('src', 'img/ojus/slide7.gif');
                    $(this).attr('id', 'slide7');
                    clicks2 += 1;
                    break;
                case "slide7":
                    $("#ojus #slide7").attr('src', 'img/ojus/slide8.gif');
                    $(this).attr('id', 'slide8');
                    clicks2 += 1;
                    break;
                case "slide8":
                    $("#ojus #slide8").attr('src', 'img/ojus/slide1.gif');
                    $(this).attr('id', "slide1");
                    $("#ojus #slide1").css("display", "none");
                    $("#ojus #start").css("display", "block");
                    clicks2 += 1;
                    break;

            }

        })
    });

});