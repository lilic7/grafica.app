describe("error.service", function() {
  var ErrorService;
  ErrorService = null;
  beforeEach(function() {
    angular.module("mokedService", []).service("$mdToast", {});
    angular.module("error.service", ["mokedService"]);
  });
  beforeEach(function() {
    inject(function(_ErrorService_) {
      ErrorService = _ErrorService_;
    });
  });
  it("should exists", function() {
    expect(ErrorService).toBeDefined();
  });
});
