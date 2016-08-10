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
    it("should NOT set matchType if sport is NOT present in sports array", function() {
      settingsFactory.setMatchType("WrongMatchType");
      expect(settingsFactory.getMatchType()).toBeNull();
      expect(errorService.setMessage).toHaveBeenCalledWith("WRONG_MATCH_NAME");
    });
  });
});
