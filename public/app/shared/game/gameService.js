angular.module("game.service", []).factory("GameService", function() {
  var factory, prepare;
  factory = {};
  factory.team1 = {
    name: "",
    player_txt: "",
    reserve_txt: "",
    player_list: [],
    reserve_list: [],
    renderPlayer: function() {
      return factory.team1.player_list = prepare(factory.team1.player_txt);
    },
    renderReserve: function() {
      return factory.team1.reserve_list = prepare(factory.team1.reserve_txt);
    }
  };
  factory.team2 = {
    name: "",
    player_txt: "",
    reserve_txt: "",
    player_list: [],
    reserve_list: [],
    renderPlayer: function() {
      return factory.team2.player_list = prepare(factory.team2.player_txt);
    },
    renderReserve: function() {
      return factory.team2.reserve_list = prepare(factory.team2.reserve_txt);
    }
  };
  prepare = function(text) {
    var text_arr;
    text_arr = text.split("\n");
    return text_arr.sort(function(a, b) {
      a = a.split(" ");
      b = b.split(" ");
      return a[0] - b[0];
    });
  };
  return factory;
});
