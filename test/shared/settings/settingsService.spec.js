describe("settings.service", function() {
  var ErrorService, SettingsService;
  SettingsService = null;
  ErrorService = null;
  beforeEach(function() {
    module(function($provide) {
      $provide.service("ErrorService", function() {
        this.setMessage = jasmine.createSpy('setMessage');
      });
    });
    module("settings.service");
  });
  beforeEach(inject(function(_SettingsService_, _ErrorService_) {
    SettingsService = _SettingsService_;
    ErrorService = _ErrorService_;
  }));
  it("should exist", function() {
    expect(SettingsService).toBeDefined();
  });
  describe("getSport", function() {
    it("should return sports array", function() {
      expect(SettingsService.getSports()).toEqual(jasmine.arrayContaining(["minifotbal"]));
    });
  });
  describe("setMatchType", function() {
    it("should set matchType for correct type", function() {
      SettingsService.setMatchType("fotbal");
      expect(SettingsService.getMatchType()).toEqual('fotbal');
    });
    it("should NOT set matchType if the type is incorrect", function() {
      SettingsService.setMatchType("wrongMatchType");
      expect(ErrorService.setMessage).toHaveBeenCalledWith('WRONG_MATCH_NAME');
      expect(SettingsService.getMatchType()).not.toEqual('wrongMatchType');
    });
  });
});
