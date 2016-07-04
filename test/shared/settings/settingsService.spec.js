describe("settings.service", function() {
  var SettingsService, mock;
  SettingsService = null;
  mock = null;
  beforeEach(angular.mock.module("settings.service"));
  beforeEach(function() {
    mock = {
      ErrorService: jasmine.createSpy()
    };
    module(function($provide) {
      $provide.value("ErrorService", mock);
    });
    inject(function(_SettingsService_) {
      SettingsService = _SettingsService_;
    });
  });
  it("should exist", function() {
    expect(SettingsService).toBeDefined();
  });
  it("should return sports array", function() {
    expect(SettingsService.getSports()).toEqual(jasmine.arrayContaining(["minifotbal"]));
  });
  xit("should set matchType this type exists in sports array", function() {
    SettingsService.setMatchType("fotbal");
    expect(SettingsService.getMatchType()).toEqual('fotbal');
    SettingsService.setMatchType("wrongMatchType");
    expect(SettingsService.getMatchType()).toEqual('wrongMatchType');
  });
});
