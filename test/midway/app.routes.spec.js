describe("Midway: Testing routes", function() {
  var tester;
  tester = null;
  beforeEach(function() {
    if (tester) {
      tester.destroy();
    }
    tester = ngMidwayTester("routes");
    tester.inject('ngRoute');
  });
  it("should have home route setted", function(done) {
    return tester.visit('/', function() {
      expect(tester.viewElement().html()).to.contain('Fotbal');
      done();
    });
  });
});
