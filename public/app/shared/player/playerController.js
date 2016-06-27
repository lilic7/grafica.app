(function() {
  'use strict';
  var PlayerController, player, showAdvanced;
  PlayerController = function(PlayerService) {
    var vm;
    vm = this;
    vm.player = player;
    console.log(player);
    vm.showAdvanced = showAdvanced;
  };
  player = {};
  showAdvanced = function($mdDialog, ev) {
    $mdDialog.show({
      controller: 'PlayerActionsController',
      controllerAs: 'actionsCtrl',
      templateUrl: 'app/shared/player/actions/actionsView.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
  PlayerController.$inject = ['PlayerService', '$mdDialog'];
  return angular.module("player.controller", ['wordFirstFilter', 'player.actions.controller', 'player.service']).controller("PlayerController", PlayerController);
})();
