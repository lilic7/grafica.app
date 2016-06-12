angular.module("team.controller", ['settings.service', 'team.service']).controller("TeamController", function(SettingsService, TeamService) {
  var vm;
  vm = this;
  vm.settingsService = SettingsService;
  vm.settings = SettingsService.all;
  vm.teamService = TeamService;
});
