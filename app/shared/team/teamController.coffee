angular.module "team.controller", ['settings.service', 'team.service']

.controller "TeamController", (SettingsService, TeamService)->
  vm = this
  vm.settingsService = SettingsService
  vm.teamService = TeamService
  
  return