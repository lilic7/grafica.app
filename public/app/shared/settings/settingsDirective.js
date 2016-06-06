angular.module("settings.directive", ['settings.controller']).directive("matchSettings", function() {
  return {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
});
