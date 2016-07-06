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
    var $httpBackend;
    $httpBackend = null;
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
    }));
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
      $httpBackend.resetExpectations();
    });
    describe("get json file if match type is in sports array", function() {
      xit("should set matchSettings for correct matchType", function() {
        var promise;
        SettingsService.setMatchType('fotbal');
        $httpBackend.whenGET("json/fotbal.json").respond({
          'fotbalSettings': 'settings'
        });
        promise = SettingsService.getMatchSettings('fotbal');
        promise.then(function(response) {
          expect(response).toBeDefined();
          return expect(response.data).toEqual({
            'fotbalSettings': 'settings'
          });
        });
        $httpBackend.flush();
      });
    });
  });
});
