(->
    GameDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            controller: "GameController"
            controllerAs: "gameCtrl"
            templateUrl: 'app/shared/game/gameView.html'
        directive
    angular
        .module "game.directive",
        [
          'game.controller',
          'timer.directive'
        ]
        .directive "game", GameDirective
)()