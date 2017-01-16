(function() {
  'use strict';
  var PlayerController;
  PlayerController = function(PlayerService, player) {
    var vm;
    vm = this;
    vm.player = "13 moco TEST PLAYER";
    console.log(player);
    vm.preparePlayer = PlayerService.preparePlayer(vm.player);
  };
  PlayerController.$inject = ['PlayerService', '$mdDialog'];
  return angular.module("player.controller", ['wordFirstFilter', 'player.actions.controller', 'player.service']).controller("PlayerController", PlayerController);
})();
