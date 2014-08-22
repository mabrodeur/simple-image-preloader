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
Copyright © 2014, Marc-Antoine Brodeur (http://marcantoinebrodeur.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
