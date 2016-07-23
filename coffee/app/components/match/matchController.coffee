(->
  MatchController = (GameService, SettingsService)->
    vm = @
    vm.team1 = GameService.team1
    vm.team2 = GameService.team2

    vm.settings = SettingsService.all

    return

  angular
  .module "match.controller",
      [
        #'team.form.directive'
        'game.directive'
        'settings.directive'
        'game.service'
        'settings.service']

  .controller 'MatchController', MatchController
)()