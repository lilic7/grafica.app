xdescribe("home.controller", function() {
  var homeCtrl, settings;
  homeCtrl = null;
  settings = null;
  beforeEach(module("home.controller"));
  beforeEach(angular.mock.module("settings.service"));
  beforeEach(module("ui.router"));
  beforeEach(inject(function($controller, _SettingsService_) {
    settings = _SettingsService_;
    spyOn(settings, "getSports").and.returnValue(['minifotbal', 'fotbal']);
    homeCtrl = $controller("HomeController", {
      SettingsService: settings
    });
  }));
  describe("HomeController", function() {
    it("matches has to be a non empty array", function() {
      homeCtrl.matches = settings.getSports();
      expect(homeCtrl.matches.toBeDefined());
      expect(homeCtrl.matches.toEqual(jasmine.arrayContaining(['minifotbal'])));
    });
  });
});
