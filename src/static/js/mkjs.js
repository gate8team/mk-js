; 'use strict';
var MKjs = (function($){
    var container, soundToPlay;

    var mkjs = function(config) {
        container = config.container || '.b-mkjs';
        soundToPlay = config.soundToPlay;
    };

    var playSound = function(soundPath) {
        var sound = soundToPlay || soundPath;
        var ogg = sound.replace('.mp3', '.ogg');

        $(container)
            .append('<div class="b-mkjs-player" style="display:none;"></div>');
        $(container)
            .find('div.b-mkjs-player')
            .html('<audio autoplay="autoplay"><source src="' + sound + '" type="audio/mpeg" /><source src="' + ogg + '" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + sound +'" /></audio>');
    };

    mkjs.prototype = {
        constructor: mkjs,
        playSound: playSound
    };

    return mkjs;
})(jQuery);