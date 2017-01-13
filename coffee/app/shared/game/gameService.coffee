(->
  GameService = ->

    prepare = (text)->
      text_arr = text.split "\n"
      text_arr.sort(
        (a, b)->
          a = a.split " "
          b = b.split " "
          a[0] - b[0]
      )

    team1 =
      name: "Dacia"
      player_txt: "7   SERGIU DONICĂ"
      reserve_txt: "6   MIHAI MUSTEA (C)"
      player_list: ["7   SERGIU DONICĂ", "9   ALEX POSTICA"]
      reserve_list: ["6   MIHAI MUSTEA (C)"]
      renderPlayer: ->
        team1.player_list = prepare(team1.player_txt)
      renderReserve: ->
        team1.reserve_list = prepare(team1.reserve_txt)


    team2 =
      name: "Zimbru"
      player_txt: "11  ALEXANDRU OLEINIC"
      reserve_txt: "8   VITALIE BUCȘAN"
      player_list: ["11  ALEXANDRU OLEINIC"]
      reserve_list: ["8   VITALIE BUCȘAN"]
      renderPlayer: ->
        team2.player_list = prepare(team2.player_txt)
      renderReserve: ->
        team2.reserve_list = prepare(team2.reserve_txt)


    {
      team1: team1
      team2: team2
    }

  angular
    .module "game.service", []
    .factory "GameService", GameService
)()