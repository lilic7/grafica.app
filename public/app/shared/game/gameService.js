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
      name: "FC UNGHENI",
      player_txt: "22 OCTAVIAN VĂTAVU\n2   VLADIMIR GHENAITIS\n5   ION ARABADJI\n6   EDUARD AVRAM",
      reserve_txt: "4   ANDREI CUȘNIR\n9   VADIM ARAMA\n21 IVAN LACUSTA",
      player_list: ["22 OCTAVIAN VĂTAVU", "2   VLADIMIR GHENAITIS", "5   ION ARABADJI", "6   EDUARD AVRAM"],
      reserve_list: ["4   ANDREI CUȘNIR", "9   VADIM ARAMA", "21 IVAN LACUSTA"],
      renderPlayer: function() {
        return team1.player_list = prepare(team1.player_txt);
      },
      renderReserve: function() {
        return team1.reserve_list = prepare(team1.reserve_txt);
      }
    };
    team2 = {
      name: "FC ACADEMIA",
      player_txt: "12 CRISTIAN AVRAM\n3   MIHAI ROȘCA\n7   SERGIU ISTRATI\n8   VALENTIN BÎRDAN",
      reserve_txt: "23 ANDREI VICOL\n14 IVAN BURLACA\n16 MAXIM ANTONIUC",
      player_list: ["12 CRISTIAN AVRAM", "3   MIHAI ROȘCA", "7   SERGIU ISTRATI", "8   VALENTIN BÎRDAN"],
      reserve_list: ["23 ANDREI VICOL", "14 IVAN BURLACA", "16 MAXIM ANTONIUC"],
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
  return angular.module("game.service", ['data.service']).factory("GameService", GameService);
})();
