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
      firstTeam = DataService.firstTeam();
      secondTeam = DataService.secondTeam();
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
      var players_list, players_text, substitutes_list, substitutes_text;
      players_text = "22 octavian VĂTAVU";
      players_list = [
        {
          "22 octavian VĂTAVU": "22 octavian VĂTAVU"
        }
      ];
      substitutes_text = "4   ANDREI CUȘNIR\n9   VADIM ARAMA\n21 IVAN LACUSTA\n13 nichifor sarbu";
      substitutes_list = [
        {
          "4   ANDREI CUȘNIR": "4   ANDREI CUȘNIR"
        }, {
          "9   VADIM ARAMA": "9   VADIM ARAMA"
        }, {
          "21 IVAN LACUSTA": "21 IVAN LACUSTA"
        }, {
          "13 NICHIFOR SARBU": "13 NICHIFOR SARBU"
        }
      ];
      beforeEach(function() {
        firstTeam.players.set(players_text);
        firstTeam.substitutes.set(substitutes_text);
      });
      it("should have set the players", function() {
        expect(firstTeam.players.getAsText()).toEqual("22 OCTAVIAN VĂTAVU");
      });
      it("should fill the list of players", function() {
        var list;
        list = firstTeam.players.getAsList();
        expect(list.length).toEqual(1);
      });
      it("should fill the list of substitutes", function() {
        var list;
        list = firstTeam.substitutes.getAsList();
        expect(list.length).toEqual(3);
      });
    });
  });
});
