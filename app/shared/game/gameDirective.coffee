(->
  game = ->
    {
      restrict: 'E'
      templateUrl: "app/shared/game/gameView.html"
      controller: "GameController"
      controllerAs: "gameCtrl"
    }

  angular
    .module "game.directive",
      [
        'game.controller'
        'timer.directive'
      ]
    .directive "game", game
)()