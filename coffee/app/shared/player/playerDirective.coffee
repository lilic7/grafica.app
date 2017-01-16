(->
    PlayerDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
#            scope: {player: "="}
            bindToController: {player: "="}
            transclude: true
            controller: "PlayerController"
            controllerAs: "playerCtrl"
            templateUrl: 'app/shared/player/playerView.html'
        directive
    angular
        .module "player.directive",
        [
          'player.controller',
          'ucfirstFilter'
        ]
        .directive "playerCard", PlayerDirective
)()