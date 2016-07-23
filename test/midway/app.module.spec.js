describe("Midway: App Module", function() {
  var module;
  module = null;
  beforeEach(function() {
    module = angular.module("app");
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
    it("should have ngMaterial dependancy", function() {
      expect(hasModule('ngMaterial')).toEqual(true);
    });
    it("should have routes dependancy", function() {
      expect(hasModule('routes')).toEqual(true);
    });
    it("should have ucfirstFilter dependancy", function() {
      expect(hasModule("ucfirstFilter")).toEqual(true);
    });
  });
});
