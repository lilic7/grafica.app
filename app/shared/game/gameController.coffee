angular.module "game.controller",
  [
    'game.service'
    'team.directive'
  ]

.controller "GameController", (GameService, SettingsService)->

  vm = this
  vm.settings = SettingsService.all

  vm.team1 = GameService.team1
  vm.team2 = GameService.team2

  return