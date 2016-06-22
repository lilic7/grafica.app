(function() {
  'use strict';
  var PlayerService;
  PlayerService = function() {
    var preparePlayer;
    preparePlayer = function(data) {
      var parts;
      data = data.replace(/( +)/g, " ");
      parts = data.split(" ");
      return {
        number: parts[0],
        name: parts[1] + " " + parts[2]
      };
    };
    return {
      preparePlayer: preparePlayer
    };
  };
  return angular.module("player.service", []).factory("PlayerService", PlayerService);
})();
