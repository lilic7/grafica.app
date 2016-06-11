angular.module("game.service", []).factory("GameService", function() {
  var factory, penalty, score;
  factory = {};
  score = "0 : 0";
  penalty = "0 : 1";
  factory.getScore = function() {
    return score;
  };
  factory.getPenaltyScore = function() {
    return penalty;
  };
  return factory;
});
