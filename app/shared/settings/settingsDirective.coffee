angular.module "settings.directive", ['settings.controller']

.directive "settings", ()->
  {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  }