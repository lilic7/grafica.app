angular.module "player.directive",
  [
    'player.controller'
    'ucfirstFilter'
  ]

.directive "playerCard", ()->
  {
    restrict: "E"
    scope: {}
    bindToController: {
      player: "="
    }
    controller: "PlayerController"
    controllerAs: "playerCtrl"
    templateUrl: "app/shared/player/playerView.html"
  }