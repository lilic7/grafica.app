angular.module "game.controller", ['game.service']

.controller "GameController", (GameService, SettingsService)->

  vm = this
  vm.settings = SettingsService.all
  vm.gameService = GameService

  return