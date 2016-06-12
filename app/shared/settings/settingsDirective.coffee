angular.module "settings.directive", ['settings.controller', 'settings.rezerve.directive']

.directive "settings", ()->
  {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  }