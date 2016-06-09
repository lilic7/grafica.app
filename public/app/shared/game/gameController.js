angular.module("game.controller", ['game.service']).controller("GameController", function(GameService) {
  var vm;
  vm = this;
  vm.gameService = GameService;
});
