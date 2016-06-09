angular.module "settings.controller", ['settings.service']

.controller "SettingsController", (SettingsService)->
  vm = this
  vm.settingsService = SettingsService
  return