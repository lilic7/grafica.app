angular.module("game.service", []).factory("GameService", function() {
  var factory;
  factory = {};
  factory.team1 = {
    name: "LEx Garant",
    player_txt: "",
    reserve_txt: ""
  };
  factory.team2 = {
    name: "Cojusna",
    player_txt: "",
    reserve_txt: ""
  };
  factory.renderPlayers = function(players_txt) {};
  return factory;
});
