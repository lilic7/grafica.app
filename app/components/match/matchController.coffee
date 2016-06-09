angular.module "match.controller", ['team.directive', 'game.directive', 'settings.directive']

.controller 'MatchController', ($routeParams)->
  vm = this
  vm.matchType = $routeParams.matchType
  vm.team1 = {name: "Stanga"}
  vm.team2 = {name: "Dreapta"}

  return