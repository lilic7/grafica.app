(function() {
  var PlayerDirective;
  PlayerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {},
      bindToController: {
        player: "="
      },
      controller: "PlayerController",
      controllerAs: "playerCtrl",
      templateUrl: 'app/shared/player/playerView.html'
    };
    return directive;
  };
  return angular.module("player.directive", ['player.controller', 'ucfirstFilter']).directive("playerCard", PlayerDirective);
})();
