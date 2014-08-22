simple-image-preloader
======================

## Really simple JavaScript image preloader with callback. 1kb minified.


### Version: 1.0.0 - Date: 2014-08-22
```
preloadImages(basePath, arr, callback);

@param  basePath : (String) base location of the images
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
preloadImages('images/', ['image1.png', 'image2.jpg', 'image3.gif'], function(){ 
	//callback actions here
});
```

### Copyright
Feel free to redistribute the script/modify at your own will.
