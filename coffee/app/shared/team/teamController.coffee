(->
  class TeamController

    @$inject: ['TeamService']

    @team            : {}
    @player_list     : []
    @substitutes_list: []

    setTeam: (team)->
      @team = team
      return @

    render: ->
      @player_list = @team.player_list.split "\n"
      @substitutes_list = @team.substitutes_list.split "\n"
      return


  angular
    .module "team.controller",
    [
      'team.service'
    ]
    .controller "TeamController", TeamController)()