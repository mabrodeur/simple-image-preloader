/*
 * VERSION: 1.0.0
 * DATE: 2014-08-22
 * 
 * @copyright: Feel free to redistribute the script/modify it.
 * 
 * @author: Marc-Antoine Brodeur, info@marcantoinebrodeur.com
 *
 * @param  basePath : (String) base location of the images
 * @param  arr : (Array) array of file names with extensions
 * @param  callback : (function) Optional callback function executed after all images have loaded
 *
 * Example usage:
 * preloadImages('images/', ['image1.png', 'image2.jpg', 'image3.gif'], function(){ //callback actions here }) ;
 *
 */
 
function preloadImages(basePath, arr, callback){

	if(arguments.length > 3){
		throw new Error('Illegal argument count.');
		return false;
	} else if(typeof basePath != "string"){
		throw new Error('First argument needs to be a string!');
		return false;
	} else if(!(arr instanceof Array)){
		throw new Error('Second argument needs to be an array of strings!');
		return false;
	} else if(typeof callback != 'undefined' && typeof callback != "function"){
		throw new Error('Third argument needs to be a function!');
		return false;
	}

	var callbackFunction = (typeof callback != "function") ? function(){} : callback;

	var imagesToLoad=[], loadedImages=0;
	for (var i = 0 ; i < arr.length; i++){
		imagesToLoad[i] = new Image;
   		imagesToLoad[i].src = basePath+arr[i];
   		imagesToLoad[i].onload=function(){
            imageLoadDone();
        }
        imagesToLoad[i].onerror=function(){
            imageLoadDone();
        }

        function imageLoadDone(){
        	loadedImages++;
        	if(loadedImages == arr.length){
        		callbackFunction();
        	}
        }
	} 
}