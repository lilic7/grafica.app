(->
    PlayerDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {}
            bindToController: {player: "="}
            controller: "PlayerController"
            controllerAs: "playerCtrl"
            templateUrl: 'app/shared/player/playerView.html'
        directive
    angular
        .module "player.directive",
        [
          'player.controller',
          'ucfisrtFilter'
        ]
        .directive "playerCard", PlayerDirective
)()