angular.module "match.controller", ['team.directive', 'game.directive', 'settings.directive', 'game.service']

.controller 'MatchController', (GameService)->
  vm = this
  vm.team1 = GameService.team1
  
  vm.team2 = GameService.team2

  return