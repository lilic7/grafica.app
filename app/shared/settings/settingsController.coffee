angular.module "settings.controller", ['settings.service']

.controller "SettingsController", ($routeParams, SettingsService)->

  vm = this

  vm.matchType = SettingsService.getMatchType()
  vm.settings = SettingsService.all

  vm.rezerve = { on: SettingsService.all.rezerve }
  
  return