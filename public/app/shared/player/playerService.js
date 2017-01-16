(function() {
  'use strict';
  var PlayerService, preparePlayer;
  PlayerService = function() {
    return {
      preparePlayer: preparePlayer
    };
  };
  preparePlayer = function(data) {
    var parts;
    console.log(data);
    data = data.replace(/( +)/g, " ");
    parts = data.split(" ");
    return {
      number: parts[0],
      name: parts[1] + " " + parts[2]
    };
  };
  return angular.module("player.service", []).factory("PlayerService", PlayerService);
})();
