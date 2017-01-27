describe("UNIT: data.service", function() {
  var DataService;
  DataService = null;
  beforeEach(module("data.service"));
  beforeEach(inject(function(_DataService_) {
    DataService = _DataService_;
  }));
  it("should be defined", function() {
    expect(DataService).toBeDefined();
  });
  describe("team properties", function() {
    var firstTeam, secondTeam;
    firstTeam = null;
    secondTeam = null;
    beforeEach(function() {
      firstTeam = DataService.firstTeam;
      secondTeam = DataService.secondTeam;
    });
    describe("name property", function() {
      it("should return empty string if name is not set", function() {
        expect(firstTeam.name.get()).toBe("");
      });
      it("should return uppercase team name", function() {
        firstTeam.name.set("FC Dacia");
        secondTeam.name.set("FC zimbru");
        expect(firstTeam.name.get()).toBe("FC DACIA");
        expect(secondTeam.name.get()).toBe("FC ZIMBRU");
      });
    });
    describe("goals property", function() {
      it("should be 0 on initialization", function() {
        expect(firstTeam.goals.get()).toBe(0);
      });
      it("should add goal if team marked", function() {
        firstTeam.mark();
        expect(firstTeam.goals.get()).toBe(1);
      });
    });
    describe("componence property", function() {
      var players_list, substitutes_list;
      players_list = "22 OCTAVIAN VĂTAVU\n2   VLADIMIR GHENAITIS\n5   ION ARABADJI\n6   EDUARD AVRAM";
      substitutes_list = "4   ANDREI CUȘNIR\n9   VADIM ARAMA\n21 IVAN LACUSTA";
      beforeEach(function() {
        firstTeam.componence.set(players_list, substitutes_list);
      });
      it("should return the text for players", function() {
        expect(firstTeam.componence.get()).toBe(players_list);
      });
    });
  });
});
