angular.module "settings.rezerve.controller", ['settings.service']

.controller "RezerveController", (SettingsService)->
  vm = this
  vm.rezerve = SettingsService.all
  return