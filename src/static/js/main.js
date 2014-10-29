$(document).ready(function () {
    var mkJS = new MKjs({
        container: '.b-toasty',
        soundToPlay: './static/sounds/toasty.mp3'
    });

    $('.b-navigation').click(function(){
        mkJS.playSound(null);
        //playSound('./static/sounds/toasty.mp3');
        $('.b-toasty').animate({
            opacity: 1,
            bottom: '-60px'
        }, 300);
    });

    $('.b-toasty').click(function(){
        $(this).animate({
            bottom: '-100%'
        }, 300);
    });
});