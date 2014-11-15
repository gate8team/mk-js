; 'use strict';

$(document).ready(function () {
    $('.b-toasty').mkJS({
        soundToPlay: './static/sounds/toasty.mp3',
        autoPlay: true
    });

    $('.b-navigation > a').click(function(event){
        event.preventDefault();
        $('.b-toasty').mkJS('toasty');
    });
});