describe("UNIT: game.service", function() {
  var GameService;
  GameService = null;
  beforeEach(module("game.service"));
  beforeEach(inject(function(_GameService_) {
    GameService = _GameService_;
  }));
});
