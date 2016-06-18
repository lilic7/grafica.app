angular.module "team.controller", []

.controller "TeamController", ()->
  vm = this

  vm.team = {}

  vm.setTeam = (team)->
    vm.team = team
  
  vm.render = ()->
    vm.player_list = vm.team.player_list.split "\n"
    vm.reserve_list = vm.team.reserve_list.split "\n"
    return

  return