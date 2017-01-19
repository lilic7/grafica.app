(function() {
  var PlayerService, preparePlayer;
  PlayerService = function() {
    return {
      preparePlayer: preparePlayer
    };
  };
  preparePlayer = function(data) {
    var name, number, parts;
    data = data.replace(/( +)/g, " ");
    parts = data.split(" ");
    number = parts.shift();
    name = parts.join(" ");
    return {
      number: number,
      name: name
    };
  };
  return angular.module("player.service", []).factory("PlayerService", PlayerService);
})();
