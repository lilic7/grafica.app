(function() {
  var game;
  game = function() {
    return {
      restrict: 'E',
      templateUrl: "app/shared/game/gameView.html",
      controller: "GameController",
      controllerAs: "gameCtrl"
    };
  };
  return angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", game);
})();
