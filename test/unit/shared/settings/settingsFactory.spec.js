describe("settings.factory", function() {
  var ErrorService, settingsFactory;
  settingsFactory = null;
  ErrorService = null;
  beforeEach(module('settings.factory'));
  beforeEach(inject(function($injector) {
    settingsFactory = $injector.get("SettingsFactory");
  }));
  describe("HttpRequests", function() {
    var $httpBackend, sports_arr, sports_obj;
    $httpBackend = null;
    sports_obj = {
      sports: [
        {
          "name": "fotbal",
          "show": true
        }
      ]
    };
    sports_arr = [
      {
        "name": "fotbal",
        "show": true
      }
    ];
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      ErrorService = $injector.get("ErrorService");
      spyOn(ErrorService, "setMessage");
      $httpBackend.whenGET("json/sports.json").respond(200, sports_obj);
    }));
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    describe("setSports", function() {
      it("should make get request to json/sports.json to get the sports array", function() {});
      it("should ", function() {});
    });
    describe("getSports", function() {
      beforeEach(function() {
        settingsFactory.setSports();
      });
      it("should get sports Object through HTTP get", function() {
        $httpBackend.flush();
        expect(settingsFactory.getSports()).toEqual(sports_arr);
      });
    });
    describe("setMatchType", function() {
      beforeEach(function() {
        settingsFactory.setSports();
      });
      it("should set match type if type exists in sports array", function() {
        $httpBackend.flush();
        settingsFactory.setMatchType("fotbal");
        expect(settingsFactory.getMatchType()).toEqual('fotbal');
      });
      it("should throw ErrorService error for wrongMatchType", function() {
        $httpBackend.flush();
        settingsFactory.setMatchType("wrongType");
        expect(settingsFactory.getMatchType()).toBeNull();
        expect(ErrorService.setMessage).toHaveBeenCalledWith("WRONG_MATCH_NAME");
      });
    });
    describe("setSettings", function() {
      var matchSettings;
      matchSettings = {
        fotbal: "settings"
      };
      beforeEach(function() {
        settingsFactory.setSports();
        $httpBackend.whenGET("json/fotbal.json").respond(200, matchSettings);
      });
      it("should make HTTP request for correct matchType", function() {
        $httpBackend.flush(1);
        settingsFactory.setMatchType("fotbal");
        settingsFactory.setSettings();
        $httpBackend.flush();
        expect(ErrorService.setMessage).not.toHaveBeenCalled();
        expect(settingsFactory.getSettings()).toEqual(matchSettings);
      });
      it("should NOT make HTTP request for incorrect matchType", function() {
        $httpBackend.flush(1);
        settingsFactory.setMatchType("wrongMatchType");
        settingsFactory.setSettings();
        expect(ErrorService.setMessage).toHaveBeenCalled();
        expect(settingsFactory.getSettings()).toEqual({});
      });
    });
  });
});
