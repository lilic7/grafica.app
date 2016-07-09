describe("settings.service", function() {
  var ErrorService, SettingsService;
  SettingsService = null;
  ErrorService = null;
  beforeEach(module("settings.service"));
  beforeEach(inject(function($injector) {
    SettingsService = $injector.get('SettingsService');
  }));
  it("should exist", function() {
    expect(SettingsService).toBeDefined();
  });
  describe("getSport", function() {
    it("should return sports array", function() {
      expect(SettingsService.getSports()).toEqual(jasmine.arrayContaining(["minifotbal"]));
      expect(SettingsService.getSports()).toEqual(jasmine.arrayContaining(["fotbal"]));
      expect(SettingsService.getSports()).toEqual(jasmine.arrayContaining(["tenis"]));
      expect(SettingsService.getSports()).toEqual(jasmine.arrayContaining(["handbal"]));
    });
    it("should not containt other sports", function() {
      return expect(SettingsService.getSports()).not.toEqual(jasmine.arrayContaining(['notMatch']));
    });
  });
  describe("setMatchType", function() {
    it("should set matchType for correct type", function() {
      SettingsService.setMatchType("fotbal");
      expect(SettingsService.getMatchType()).toEqual('fotbal');
    });
    describe("should rise ErrorService setMessage if the match type is incorect", function() {
      beforeEach(inject(function($injector) {
        ErrorService = $injector.get("ErrorService");
        ErrorService.setMessage = jasmine.createSpy("setMessage");
      }));
      it("should NOT set matchType if the type is incorrect", function() {
        SettingsService.setMatchType("wrongMatchType");
        expect(ErrorService.setMessage).toHaveBeenCalledWith("WRONG_MATCH_NAME");
        expect(SettingsService.getMatchType()).not.toEqual('wrongMatchType');
        expect(SettingsService.getMatchType()).toEqual('');
      });
    });
  });
  describe("setMatchSettings", function() {
    var $httpBackend, testRequest;
    $httpBackend = null;
    testRequest = null;
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      testRequest = $httpBackend.whenGET("json/fotbal.json").respond(200, {
        fotbalSettings: 'settings'
      });
    }));
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    describe("get settings from JSON file", function() {
      it("should set matchSettings for correct matchType", function() {
        SettingsService.setMatchType('fotbal');
        SettingsService.getMatchSettings();
        $httpBackend.flush();
      });
      return;
      return it("should NOT make http request for incorrect matchType", function() {
        SettingsService.setMatchType("whongMAtchType");
        testRequest.respond(404, {});
        SettingsService.getMatchSettings();
        $httpBackend.flush();
      });
    });
  });
});
