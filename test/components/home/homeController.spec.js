describe("home.controller", function() {
  var homeCtrl;
  homeCtrl = null;
  beforeEach(module("home.controller"));
  beforeEach(module("settings.service", function($provide) {
    $provide.value("SettingsService", {
      getSports: function() {
        return ['minifotbal', 'fotbal'];
      }
    });
  }));
  beforeEach(inject(function($controller) {
    homeCtrl = $controller("HomeController");
  }));
  describe("HomeController", function() {
    it("matches has to be a non empty array", function() {
      expect(homeCtrl.matches).toBeDefined();
      expect(homeCtrl.matches).toEqual(jasmine.arrayContaining(['minifotbal']));
    });
  });
});
