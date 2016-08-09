describe("Midway: Routes Module", function() {
  var module;
  module = null;
  beforeEach(function() {
    module = angular.module("routes");
  });
  it("should be registred", function() {
    expect(module).not.toEqual(null);
  });
  describe("Dependances: ", function() {
    var deps, hasModule;
    deps = null;
    hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };
    beforeEach(function() {
      return deps = module.value('app').requires;
    });
    it("should have ngRoute dependancy", function() {
      expect(hasModule('ngRoute')).toEqual(true);
    });
    it("should have home.controller dependancy", function() {
      expect(hasModule('home.controller')).toEqual(true);
    });
    it("should have match.controller dependancy", function() {
      expect(hasModule('match.controller')).toEqual(true);
    });
    return it("should have settings.factory dependancy", function() {
      expect(hasModule('settings.factory')).toEqual(true);
    });
  });
  describe("Paths", function() {
    var tester;
    tester = null;
    beforeEach(function() {
      if (tester) {
        tester.destroy();
      }
      tester = ngMidwayTester("app");
    });
    it("should have /match/fotbal route setted", function() {
      expect(ROUTER.routeDefined('/match/fotbal')).toEqual(true);
    });
  });
});
