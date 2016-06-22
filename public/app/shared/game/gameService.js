(function() {
  var GameService;
  GameService = function() {
    var prepare, team1, team2;
    prepare = function(text) {
      var text_arr;
      text_arr = text.split("\n");
      return text_arr.sort(function(a, b) {
        a = a.split(" ");
        b = b.split(" ");
        return a[0] - b[0];
      });
    };
    team1 = {
      name: "",
      player_txt: "7   SERGIU DONICĂ",
      reserve_txt: "6   MIHAI MUSTEA (C)",
      player_list: ["7   SERGIU DONICĂ"],
      reserve_list: ["6   MIHAI MUSTEA (C)"],
      renderPlayer: function() {
        return team1.player_list = prepare(team1.player_txt);
      },
      renderReserve: function() {
        return team1.reserve_list = prepare(team1.reserve_txt);
      }
    };
    team2 = {
      name: "",
      player_txt: "11  ALEXANDRU OLEINIC",
      reserve_txt: "8   VITALIE BUCȘAN",
      player_list: ["11  ALEXANDRU OLEINIC"],
      reserve_list: ["8   VITALIE BUCȘAN"],
      renderPlayer: function() {
        return team2.player_list = prepare(team2.player_txt);
      },
      renderReserve: function() {
        return team2.reserve_list = prepare(team2.reserve_txt);
      }
    };
    return {
      team1: team1,
      team2: team2
    };
  };
  return angular.module("game.service", []).factory("GameService", GameService);
})();
