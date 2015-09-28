/**
 * jQuery TypeIt
 * @author Alex MacArthur (http://macarthur.me)
 * @copyright 2015 Alex MacArthur
 * @description Types out a given string.
 */

 (function($){

   $.fn.typeIt = function(options){

    var settings = $.extend({
       stringToType : 'This is the default string. Please replace this string with your own.',
       typeSpeed: 500,
       lifeLike: true
    }, options);

    var theElement = this;
    var typeSpeed = settings.typeSpeed;
    var delayTime = settings.typeSpeed;
    var theString = settings.stringToType;
    var characterArray = theString.split('');

    // set up the CSS
    theElement.css({
      'position':'relative',
      'border-right':'.1em solid black',
      'padding-right':'4px'
    });

    // output the string
    var i = 0;
    function typeLoop () {
      if(settings.lifeLike === true){
        delayTime = typeSpeed*Math.random();
      }
      setTimeout(function () {
        theElement.append(characterArray[i]);
        i++;
        if (i < characterArray.length) {
          typeLoop();
        }
      }, delayTime);
    }
    typeLoop();

  };

 }(jQuery));
