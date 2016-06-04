angular.module("startPage", ['ngMaterial']).filter("ucfirst", function() {
  return function(input) {
    var out;
    input = input || "";
    out = "";
    out = input.charAt(0).toUpperCase() + input.substr(1);
    return out;
  };
}).controller("StartPageController", [
  'ucfirstFilter', function(ucfirstFilter) {
    var vm;
    vm = this;
    vm.matches = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
    vm.image = function() {
      return parseInteger(Math.random() + 1);
    };
  }
]);
