angular.module "settings.directive", ['settings.controller']

.directive "matchSettings", ()->
  {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  }