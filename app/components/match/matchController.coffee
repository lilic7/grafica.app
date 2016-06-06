angular.module "match.controller", ['teamInfo.directive', 'settings.directive']
.controller 'MatchController', ($routeParams)->
  vm = this
  vm.matchType = $routeParams.matchType
  return