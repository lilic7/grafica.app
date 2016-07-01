(function() {
  var rewrite, wordFirst;
  wordFirst = function() {
    return function(input) {
      var i, len, out, word, words;
      input = input || "";
      out = "";
      words = input.split(' ');
      for (i = 0, len = words.length; i < len; i++) {
        word = words[i];
        out += rewrite(word);
      }
      return out.trim();
    };
  };
  rewrite = function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() + " ";
  };
  return angular.module("wordFirstFilter", []).filter('wordFirst', wordFirst);
})();
