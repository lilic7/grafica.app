angular.module "matchSettings", []

.directive "matchSettings", ()->
  {
  restrict: "E",
  templateUrl: "../shared/settings.html",
  controller: "SettingsController",
  controllerAs: "settingsCtrl"
  }

.controller "SettingsController", (SettingsFactory)->
  vm = this
  vm.settings = SettingsFactory
  vm.matchType = "s"
  return

.factory "SettingsFactory", ()->
  {
    rezerve: true,
  }

.config ($locationProvider)->
  $locationProvider.html5Mode true