xdescribe("home.controller", function() {
  var HomeController, SettingsService;
  HomeController = null;
  SettingsService = null;
  beforeEach(module("home.controller"));
  beforeEach(inject(function($injector) {
    var $controller;
    $controller = $injector.get("$controller");
    HomeController = $controller("HomeController");
    SettingsService;
  }));
  describe("HomeController", function() {
    it("matches has to be a non empty array", function() {
      homeCtrl.matches = settings.getSports();
      expect(homeCtrl.matches.toBeDefined());
      expect(homeCtrl.matches.toEqual(jasmine.arrayContaining(['minifotbal'])));
    });
  });
});
