describe("settings.factory", function() {
  var ErrorService, SettingsService, settingsFactory;
  settingsFactory = null;
  ErrorService = null;
  SettingsService = null;
  beforeEach(module('settings.factory'));
  beforeEach(inject(function($injector) {
    settingsFactory = $injector.get("SettingsFactory");
  }));
  it("should exist", function() {
    expect(settingsFactory).toBeDefined();
  });
  describe("HttpRequests", function() {
    var $httpBackend;
    $httpBackend = null;
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      ErrorService = $injector.get("ErrorService");
      spyOn(ErrorService, "setMessage");
      $httpBackend.whenGET("json/sports.json").respond(200, {
        sports: [
          {
            "name": "fotbal",
            "show": true
          }
        ]
      });
    }));
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    describe("getSports", function() {
      beforeEach(function() {
        settingsFactory.setSports();
      });
      it("should get sports Object through HTTP get", function() {
        $httpBackend.flush();
        expect(settingsFactory.getSports()).toEqual({
          sports: [
            {
              "name": "fotbal",
              "show": true
            }
          ]
        });
      });
      describe("setMatchType", function() {
        it("should check if match type is in sports array", function() {
          $httpBackend.flush();
          settingsFactory.setMatchType("fotbal");
          expect(settingsFactory.getSports()).toEqual({
            sports: [
              {
                "name": "fotbal",
                "show": true
              }
            ]
          });
          expect(settingsFactory.getMatchType()).toEqual('fotbal');
        });
        it("should throw ErrorService error for wrongMatchType", function() {
          $httpBackend.flush();
          settingsFactory.setMatchType("wrongType");
          expect(settingsFactory.getMatchType()).toBeNull();
          expect(ErrorService.setMessage).toHaveBeenCalled();
          expect(ErrorService.setMessage).toHaveBeenCalledWith("WRONG_MATCH_NAME");
        });
      });
    });
    describe("setSettings", function() {
      beforeEach(function() {
        settingsFactory.setSports();
      });
      it("should make HTTP request for correct matchType", function() {
        $httpBackend.whenGET("json/fotbal.json").respond(200, {
          fotbal: "settings"
        });
        settingsFactory.setMatchType("fotbal");
        settingsFactory.setSettings();
        $httpBackend.flush();
        expect(settingsFactory.getSports()).toEqual({
          sports: [
            {
              "name": "fotbal",
              "show": true
            }
          ]
        });
        expect(ErrorService.setMessage).not.toHaveBeenCalled();
        expect(settingsFactory.getSettings()).toEqual({
          fotbal: "settings"
        });
      });
      it("should NOT make HTTP request for incorrect matchType", function() {
        settingsFactory.setMatchType("wrongMatchType");
        settingsFactory.setSettings();
        $httpBackend.flush();
        expect(settingsFactory.getSettings()).toEqual({});
      });
    });
  });
  describe("setService", function() {});
});
