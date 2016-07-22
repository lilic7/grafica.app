(function() {
  var GameDirective;
  GameDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      controller: "GameController",
      controllerAs: "gameCtrl",
      templateUrl: 'app/shared/game/gameView.html'
    };
    return directive;
  };
  return angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", GameDirective);
})();
