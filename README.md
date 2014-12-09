# Throttle resize
Replacement for the javascript resize event listener that prevents the resize callback function from stacking and causing poor performance. Features an option to debounce the resize, or trigger the callback function a specified time after the last resize event.

## Inspiration
[Leaner, Meaner, Faster Animations with requestAnimationFrame](http://www.html5rocks.com/en/tutorials/speed/animations/)

## Default Throttle Usage
Throttle the resize event and prevent the callback from triggering if it is currently running.

Old:

```javascript
window.addEventListener('resize', customFunc, false);
```

New:

```javascript
throttle.resize( customFunc );
```

## Debounce Usage
Debounce the resize event and only trigger the callback 250ms after the last resize event.

```javascript
throttle.resize( customFunc, 250 );
```

The `throttle` object also contains properties for the pixel width and height of the window.

```javascript
function customFunc() {
	if ( throttle.windowWidth > 320 ) { 
		// do stuff
	}
	if ( throttle.windowHeight > 480 ) { 
		// do stuff
	}
}
```
## Beyond
Underscore.js has awesome [throttle](http://underscorejs.org/#throttle) and [debounce](http://underscorejs.org/#debounce) functions.