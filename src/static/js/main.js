$(document).ready(function () {
    function playSound(filename){
        $('body').append('<div id="sound_player" style="display:none;"></div>');
        //ogg for firefox
        var ogg = filename.replace(".mp3", ".ogg");

        document.getElementById("sound_player").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '" type="audio/mpeg" /><source src="' + ogg + '" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'" /></audio>';
    }

//    $('.b-toasty').slideDown("slow");

    $('.b-navigation').click(function(){
        playSound('./static/sounds/toasty.mp3');
        $('.b-toasty').animate({
            opacity: 1,
            bottom: 0
        }, 300);
    });
});