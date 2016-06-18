angular.module "game.service", []

.factory "GameService", ()->
  factory = {}

  factory.team1 = {
    name: ""
    player_txt: ""
    reserve_txt: ""
    player_list: []
    reserve_list: []
    renderPlayer: ()->
      factory.team1.player_list = prepare(factory.team1.player_txt)
    renderReserve: ()->
      factory.team1.reserve_list = prepare(factory.team1.reserve_txt)
  }

  factory.team2 = {
    name: ""
    player_txt: ""
    reserve_txt: ""
    player_list: []
    reserve_list: []
    renderPlayer: ()->
      factory.team2.player_list = prepare(factory.team2.player_txt)
    renderReserve: ()->
      factory.team2.reserve_list = prepare(factory.team2.reserve_txt)
  }

  prepare = (text)->
    text_arr = text.split "\n"
    text_arr.sort(
      (a, b)->
        a = a.split " "
        b = b.split " "
        a[0] - b[0]
    )

  factory