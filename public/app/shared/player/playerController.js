(function() {
  'use strict';
  var PlayerController;
  PlayerController = (function() {
    PlayerController.$inject = ['PlayerService', '$mdDialog'];

    function PlayerController(PlayerService, $mdDialog1) {
      this.PlayerService = PlayerService;
      this.$mdDialog = $mdDialog1;
    }

    PlayerController.prototype.setPlayer = function(player) {
      if (typeof player === "string") {
        this.player = this.PlayerService.preparePlayer(player);
      } else {
        console.log("player is not a string");
      }
      return this.player.number;
    };

    PlayerController.prototype.showAdvanced = function($mdDialog, ev) {
      $mdDialog.show({
        controller: 'PlayerActionsController',
        controllerAs: 'actionsCtrl',
        templateUrl: 'app/shared/player/actions/actionsView.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    };

    return PlayerController;

  })();
  return angular.module("player.controller", ['wordFirstFilter', 'player.actions.controller', 'player.service']).controller("PlayerController", PlayerController);
})();
