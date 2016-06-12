angular.module "home.controller", ['settings.service']

.controller "HomeController", (SettingsService)->
  vm = this
  vm.matches = SettingsService.sports

  return