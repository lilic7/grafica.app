angular.module "teamInfo.controller", ['settings.service']

.controller "TeamInfoController", (SettingsFactory)->
  vm = this
  vm.settings = SettingsFactory
  return