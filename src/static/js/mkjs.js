; 'use strict';
var MKjs = (function($){
    var container, soundToPlay, startInterval, endInterval;

    var mkjs = function(config) {
        container = config.container || '.b-mkjs';
        soundToPlay = config.soundToPlay;
        startInterval = config.startInterval || 300;
        endInterval = config.endInterval || 300;
    };

    var playSound = function(soundPath) {
        var sound = soundToPlay || soundPath;
        var ogg = sound.replace('.mp3', '.ogg');

        $(container)
            .append('<div class="b-mkjs-player" style="display:none;"></div>');
        $(container)
            .find('div.b-mkjs-player')
            .html('<audio autoplay="autoplay"><source src="' + sound + '" type="audio/mpeg" /><source src="' + ogg + '" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + sound +'" /></audio>');

        return this;
    };

    var toastyIn = function() {
        $(container).animate({
            opacity: 1,
            bottom: '-60px'
        }, startInterval);

        return this;
    };

    var toastyOut = function() {
        $(container).animate({
            bottom: '-100%'
        }, endInterval);

        return this;
    };

    mkjs.prototype = {
        constructor: mkjs,
        playSound: playSound,
        toastyIn: toastyIn,
        toastyOut: toastyOut
    };

    return mkjs;
})(jQuery);