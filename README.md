simple-image-preloader
======================

## Really simple JavaScript image preloader with callback. ~0.8kb  minified.


### Version: 1.1 - Date: 2017-01-03
```
preloadImages(arr, callback);

@param  arr : (Array) array of file names with extensions
@param  callback : (function) Optional callback function executed after all images have loaded
```


## Usage ##

Include simple-image-preloader.js in your JavaScript bundle or add it to your HTML page like this:

```html
<script type='application/javascript' src='/path/to/simple-image-preloader.js'></script>
```




To start preloading, execute the script like in this example:
```js
preloadImages(['images/image1.png', 'images/subfolder/image2.jpg', 'image3.gif'], function(){ 
	//callback actions here
});
```

### Copyright
Copyright © 2017, Marc-Antoine Brodeur (http://marcantoinebrodeur.com)

simple-image-preloader is licensed under the MIT license. (http://opensource.org/licenses/MIT)
