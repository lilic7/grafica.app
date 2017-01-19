(function() {
  var TeamService, getGoals, getName, getPlayersTxt, getSubstitutesTxt, goals, mark, name, parse, players_txt, setName, setPlayersTxt, setSubstitutesTxt, substitutes_txt;
  TeamService = function() {
    return {
      getName: getName,
      setName: function(name) {
        return setName(name);
      },
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
      },
      getGoals: getGoals,
      mark: mark
    };
  };
  name = "";
  goals = 0;
  players_txt = "";
  substitutes_txt = "";
  getName = function() {
    return name;
  };
  setName = function(newName) {
    return name = newName;
  };
  getGoals = function() {
    return goals;
  };
  mark = function() {
    goals++;
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
