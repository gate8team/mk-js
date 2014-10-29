$(document).ready(function () {
    var mkJS = new MKjs({
        container: '.b-toasty',
        soundToPlay: './static/sounds/toasty.mp3',
        startInterval: 300,
        endInterval: 300
    });

    $('.b-navigation').click(function(){
        mkJS.playSound(null)
            .toastyIn();
    });

    $('.b-toasty').click(function(){
        mkJS.toastyOut();
    });
});