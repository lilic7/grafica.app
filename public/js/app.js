angular.module("mainApp", ['ngMaterial', 'ngRoute', 'startPage', 'teamInfo']);

angular.module("matchSettings", []).directive("matchSettings", function() {
  return {
    restrict: "E",
    templateUrl: "../shared/settings.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
}).controller("SettingsController", ["SettingsFactory", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
  vm.matchType = "s";
}]).factory("SettingsFactory", function() {
  return {
    rezerve: true
  };
}).config(["$locationProvider", function($locationProvider) {
  return $locationProvider.html5Mode(true);
}]);

angular.module("teamInfo", ['matchSettings']).directive("teamInfo", function() {
  return {
    restrict: "E",
    templateUrl: "../shared/teamInfoForm.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  };
}).controller("TeamInfoController", ["SettingsFactory", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
}]);

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
