angular.module "game.service", []

.factory "GameService", ()->
  factory = {}
  score = "0 : 0"
  penalty = "0 : 01"

  factory.getScore = ()->
    score

  factory.getPenaltyScore = ()->
    penalty
  

  factory