/*
 * VERSION: 1.0.3
 * DATE: 2014-08-22
 * 
 * Copyright © 2014, Marc-Antoine Brodeur (http://marcantoinebrodeur.com)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

    var callbackFunction = (typeof callback == "undefined") ? function(){} : callback;

    if(arr.length == 0){
        callbackFunction();
    } else {

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
        } 

        function imageLoadDone(){
            loadedImages++;
            if(loadedImages == arr.length){
                callbackFunction();
            }
        }
    }

}