(function() {
  var TeamService, getName, getPlayersTxt, getSubstitutesTxt, name, parse, players_txt, setPlayersTxt, setSubstitutesTxt, substitutes_txt;
  TeamService = function() {
    return {
      getName: getName,
      getPlayers: function() {
        return parse(players_txt);
      },
      getSubstitutes: function() {
        return parse(substitutes_txt);
      },
      getPlayers_txt: getPlayersTxt,
      setPlayers_txt: function(text) {
        return setPlayersTxt(text);
      },
      getSubstitutes_txt: getSubstitutesTxt,
      setSubstitutes_txt: function(text) {
        return setSubstitutesTxt(text);
      }
    };
  };
  name = "";
  players_txt = "";
  substitutes_txt = "";
  getName = function() {
    return name;
  };
  parse = function(str) {
    var allPlayers, i, len, list, obj, row;
    list = str.split("\n");
    allPlayers = [];
    for (i = 0, len = list.length; i < len; i++) {
      row = list[i];
      obj = {
        "all": row.trim().toUpperCase()
      };
      allPlayers.push(obj);
    }
    return allPlayers;
  };
  getPlayersTxt = function() {
    return players_txt;
  };
  setPlayersTxt = function(text) {
    return players_txt = text;
  };
  getSubstitutesTxt = function() {
    return substitutes_txt;
  };
  setSubstitutesTxt = function(text) {
    return substitutes_txt = text;
  };
  return angular.module("team.service", []).factory("TeamService", TeamService);
})();
