// Secure random number generator interface.
(function( window, undefined ) {
  "use strict";

  var SecureRandom = window.SecureRandom = {
    // generates a random string.
    string : function(length){
      var text = "", possible = "abcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = length - 1; i >= 0; i--) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      };
      return text;
    },

    // generates a v4 random UUID (Universally Unique IDentifier).
    uuid : function(){
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    }
  };

})(window);
