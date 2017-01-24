(function() {
  var GameController;
  GameController = (function() {
    GameController.prototype.$inject = ["GameService"];

    function GameController(GameService, SettingsService) {
      this.team1 = GameService.team1;
      this.team2 = GameService.team2;
      this.settings = SettingsService.settings;
    }

    return GameController;

  })();
  return angular.module("game.controller", ['game.service', 'team.directive', 'timer.directive', 'settings.service']).controller("GameController", GameController);
})();
