angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", function() {
  return {
    restrict: 'E',
    templateUrl: "app/shared/game/gameView.html",
    controller: "GameController",
    controllerAs: "gameCtrl"
  };
});
