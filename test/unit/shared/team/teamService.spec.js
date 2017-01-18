describe("UNIT: team.service", function() {
  var TeamService;
  TeamService = null;
  beforeEach(module("team.service"));
  beforeEach(inject(function($injector) {
    TeamService = $injector.get("TeamService");
  }));
  describe("functia: update", function() {
    it("genereaza lista de jucatori (players) din players_txt", function() {
      TeamService.setPlayers_txt("12 ionica Tudor");
      expect(TeamService.getPlayers()).toEqual([
        {
          "all": "12 IONICA TUDOR"
        }
      ]);
    });
    it("genereaza lista de jucatori (players) din players_txt (mai multi jucatori)", function() {
      TeamService.setPlayers_txt("12 ionica Tudor\n 15 COstica Alex");
      expect(TeamService.getPlayers()).toEqual([
        {
          "all": "12 IONICA TUDOR"
        }, {
          "all": "15 COSTICA ALEX"
        }
      ]);
    });
    it("poate marca goluri", function() {
      expect(TeamService.getGoals()).toEqual(0);
      TeamService.mark();
      expect(TeamService.getGoals()).toEqual(1);
    });
    it("TEMP: instance of ?", function() {
      var Player;
      Player = (function() {
        function Player(name) {
          this.name = name;
        }

        return Player;

      })();
    });
  });
});
