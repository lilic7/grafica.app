angular.module("game.controller", ['game.service', 'team.directive']).controller("GameController", function(GameService, SettingsService) {
  var vm;
  vm = this;
  vm.settings = SettingsService.all;
  vm.team1 = GameService.team1;
  vm.team2 = GameService.team2;
});
