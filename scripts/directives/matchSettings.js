angular.module("matchSettings", []).directive("matchSettings", function() {
  return {
    restrict: "E",
    templateUrl: "../shared/settings.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
}).controller("SettingsController", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
  vm.matchType = "s";
}).factory("SettingsFactory", function() {
  return {
    rezerve: true
  };
}).config(function($locationProvider) {
  return $locationProvider.html5Mode(true);
});
