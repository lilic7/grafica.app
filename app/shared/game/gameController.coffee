(->
  GameController = (GameService, SettingsService)->
    vm = @
    vm.team1 = GameService.team1
    vm.team2 = GameService.team2
    vm.settings = SettingsService.all
    return

  angular
    .module "game.controller",
      [
        'game.service'
        'team.directive'
      ]
    .controller "GameController", GameController
)()