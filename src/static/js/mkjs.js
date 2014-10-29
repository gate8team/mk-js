; 'use strict';

(function($) {
    var defaults = {
        audioClass: 'b-mkjs-player',
        startInterval: 300,
        endInterval: 300,
        interval: 1000
    };

    var appendPlayer = function(options) {
        var sound = options.soundToPlay,
            container = options.container,
            ogg = sound.replace('.mp3', '.ogg');

        $(container)
            .append('<div class="{audioClass}" style="display:none;"></div>'.replace('{audioClass}', defaults.audioClass));
        $(container)
            .find('div.{audioClass}'.replace('{audioClass}', defaults.audioClass))
            .html('<audio><source src="' + sound + '" type="audio/mpeg" /><source src="' + ogg + '" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + sound +'" /></audio>');

        return this;
    };

    var playSound = function(options) {
        var container = options.container;

        var audio = $(container)
            .find('div.{audioClass}'.replace('{audioClass}', defaults.audioClass))
            .find('audio');

        $(audio).get(0).play();
    };

    var toastyIn = function(options) {
        var container = options.container,
            startInterval = options.startInterval || defaults.startInterval;

        $(container).animate({
            opacity: 1,
            bottom: '-60px'
        }, startInterval);

        return this;
    };

    var toastyOut = function(options) {
        var container = options.container,
            endInterval = options.endInterval || defaults.endInterval;

        $(container).animate({
            bottom: '-100%'
        }, endInterval);

        return this;
    };

    var toasty = function(options) {
        var interval = options.interval || defaults.interval,
            params = $.extend({}, options);

        toastyIn(params);
        playSound(params);

        setTimeout(function(){
            toastyOut(params);
        }, interval);
    };

    var methods = {
        init: function(options) {
            this.each(function(){
                $.extend(options, {
                    container: this
                });
                appendPlayer(options);
            });

            return this;
        },
        toastyIn: function(options) {
            var params = options || {};

            this.each(function(){
                $.extend(params, {
                    container: this
                });
                toastyIn(params);
            });

            return this;
        },
        toastyOut: function(options) {
            var params = options || {};

            this.each(function(){
                $.extend(params, {
                    container: this
                });
                toastyOut(params);
            });

            return this;
        },
        toasty: function(options) {
            var params = options || {};

            this.each(function(){
                $.extend(params, {
                    container: this
                });

                toasty(params);
            });

            return this;
        }
    };

    $.fn.mkJS = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('No such ' +  method + ' for jQuery.mkJS..');
        }
    };
})(jQuery);