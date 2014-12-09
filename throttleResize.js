var throttle = throttle || {};

throttle.resize = function( callback, debounceDelay ) {
    if (!callback || typeof( callback ) != 'function') {
        return;
    }

    var isTicking;
    var resizeTimer;
    
    function getWindowWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    };

    function getWindowHeight() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    throttle.windowWidth = getWindowWidth();
    throttle.windowHeight = getWindowHeight();

    function onResize() {
        throttle.windowWidth = getWindowWidth();
        throttle.windowHeight = getWindowHeight();
        getTick();
    }

    function getTick() {
        if (debounceDelay > 0) {

            if (resizeTimer != null)
                clearTimeout( resizeTimer );

            resizeTimer = setTimeout( function() {
                isTicking = true;
                window.requestAnimationFrame( update );

                resizeTimer = null;
            }, debounceDelay);

        } else if (!isTicking) {

            isTicking = true;
            window.requestAnimationFrame( update );

        }
    }

    function update() {
        if (callback && typeof(callback) == 'function')
            callback.apply( this );

        isTicking = false;
    }

    window.addEventListener('resize', onResize, false);
};