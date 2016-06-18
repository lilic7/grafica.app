angular.module("wordFirstFilter", []).filter('wordFirst', function() {
  return function(input) {
    var out;
    input = input || "";
    out = "";
    out = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    return out;
  };
});
