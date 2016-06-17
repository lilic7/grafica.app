angular.module "game.controller", ['game.service']

.controller "GameController", (GameService, SettingsService)->

  vm = this
  vm.settings = SettingsService.all
  vm.gameService = GameService

  vm.team1 = GameService.team1
  vm.team2 = GameService.team2

  return