angular.module "settings.controller", ['settings.service']

.controller "SettingsController", ($routeParams, SettingsService)->
  vm = this

  vm.matchType = $routeParams.matchType
  
  vm.settingsService = SettingsService

  SettingsService.setCurrent vm.matchType

  vm.showSection = ()->
    vm.match = SettingsService.matchSettings()
  
  return