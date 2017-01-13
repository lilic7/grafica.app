describe("UNIT: settings.factory", function() {
  var $httpBackend, errorService, matchSettings, settingsFactory, sports;
  settingsFactory = null;
  errorService = null;
  $httpBackend = null;
  matchSettings = {
    reprize: 2,
    timer: true,
    repriza: 45,
    pauza: 15
  };
  sports = [
    {
      "name": "fotbal",
      "show": true
    }, {
      "name": "handbal",
      "show": true
    }
  ];
  beforeEach(module('settings.factory'));
  beforeEach(module('sport.service'));
  beforeEach(inject(function($injector) {
    var sportService;
    $httpBackend = $injector.get("$httpBackend");
    settingsFactory = $injector.get("SettingsFactory");
    errorService = $injector.get("ErrorService");
    sportService = $injector.get("SportService");
    spyOn(sportService, "getSelected").and.returnValue(sports);
    spyOn(errorService, "setMessage");
  }));
  describe("setMatchType", function() {
    it("should set matchType if given sport is present in sports array", function() {
      settingsFactory.setMatchType("fotbal");
      expect(settingsFactory.getMatchType()).toEqual("fotbal");
    });
  });
  describe("setSettings", function() {
    beforeEach(function() {
      $httpBackend.whenGET("json/fotbal.json").respond(200, matchSettings);
    });
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    it("should make HTTP request for correct matchType", function() {
      settingsFactory.setMatchType("fotbal");
      settingsFactory.setSettings();
      $httpBackend.flush();
      expect(errorService.setMessage).not.toHaveBeenCalled();
      expect(settingsFactory.getSettings()).toEqual(matchSettings);
    });
  });
});
