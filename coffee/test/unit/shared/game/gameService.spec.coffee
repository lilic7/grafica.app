describe "UNIT: game.service", ->

  GameService = null

  beforeEach module "game.service"

  beforeEach inject (_GameService_)->
    GameService = _GameService_
    return

  return