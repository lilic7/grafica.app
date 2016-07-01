(function() {
  var ucfirst;
  ucfirst = function() {
    return function(input) {
      var out;
      input = input || "";
      out = "";
      out = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
      return out.trim();
    };
  };
  return angular.module("ucfirstFilter", []).filter('ucfirst', ucfirst);
})();
