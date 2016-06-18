angular.module "settings.directive",
  [
    'settings.controller'
    'settings.rezerve.directive'
    'settings.offside.directive'
    'settings.corner.directive'
    'settings.departajari.directive'
    'settings.repriza.directive'
    'settings.pauza.directive'
    'settings.timer.directive'
  ]

.directive "settings", ()->
  {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  }