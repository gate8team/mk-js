## jQuery Toasty Plugin

### Link to show
You can try this plugin here: http://gate8team.github.io/

### Installation

1. Include jQuery script in your page.
2. Include mkjs.js script.

----

### Usage

1. Define mkJS block and pass object with parameters:
    ```javascript
    $('.b-toasty').mkJS({
        soundToPlay: './static/sounds/toasty.mp3',
        autoPlay: true
    });
    ```

2. To make toasty appear + disappear you can simple use:
    ```javascript
    $('.b-toasty').mkJS('toasty');
    ```

3. To make toasty appear you can simple use:
    ```javascript
    $('.b-toasty').mkJS('toastyIn');
    ```

4. To make toasty disappear you can simple use:
    ```javascript
    $('.b-toasty').mkJS('toastyOut');
    ```