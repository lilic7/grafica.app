angular.module "settings.controller", ['settings.service']

.controller "SettingsController", (SettingsFactory)->
  vm = this
  vm.settings = SettingsFactory
  return