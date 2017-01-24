describe "UNIT: GameController", ->
  GameController = null

  beforeEach module "game.controller"

  beforeEach inject (_$controller_)->
    $controller = _$controller_
    GameController = $controller "GameController", {}
    return

  it "should be defined", ->
    expect GameController
      .toBeDefined()
    return

  return