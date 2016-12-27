(function() {
  var GameController;
  GameController = function(GameService, SettingsService) {
    var vm;
    vm = this;
    vm.team1 = GameService.team1;
    vm.team2 = GameService.team2;
    vm.settings = SettingsService.settings;
  };
  return angular.module("game.controller", ['game.service', 'team.directive', 'timer.directive']).controller("GameController", GameController);
})();
