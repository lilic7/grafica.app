(->
  TeamController = ()->

    vm = @
    vm.team = {}

    vm.setTeam = setTeam
    vm.render = render

    setTeam = (team)->
      vm.team = team

    render = ()->
      vm.player_list = vm.team.player_list.split "\n"
      vm.reserve_list = vm.team.reserve_list.split "\n"
      return

    return

  angular
    .module "team.controller", []
    .controller "TeamController", TeamController
)()