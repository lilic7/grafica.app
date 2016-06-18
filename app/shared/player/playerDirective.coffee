angular.module "player.directive",
  [
    'player.controller'
    'ucfirstFilter'
  ]

.directive "playerCard", ()->
  {
    restrict: "E"
    scope: {
      player: "="
    }
    link: (scope, element, attrs, playerCtrl)->
      playerCtrl.preparePlayer scope.player
    controller: "PlayerController"
    controllerAs: "playerCtrl"
    templateUrl: "app/shared/player/playerView.html"
  }