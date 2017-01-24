describe("UNIT: GameController", function() {
  var GameController;
  GameController = null;
  beforeEach(module("game.controller"));
  beforeEach(inject(function(_$controller_) {
    var $controller;
    $controller = _$controller_;
    GameController = $controller("GameController", {});
  }));
  it("should be defined", function() {
    expect(GameController).toBeDefined();
  });
});
