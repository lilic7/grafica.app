angular.module "game.controller", ['game.service']

.controller "GameController", (GameService)->
  vm = this
  
  vm.gameService = GameService

  return