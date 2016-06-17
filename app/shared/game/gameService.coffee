angular.module "game.service", []

.factory "GameService", ()->
  factory = {}

  factory.team1 = {
    name: "LEx Garant"
    player_txt: ""
    reserve_txt: ""
  }
  factory.team2 = {
    name: "Cojusna"
    player_txt: ""
    reserve_txt: ""
  }

  factory.renderPlayers = (players_txt)->

  

  factory