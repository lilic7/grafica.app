describe "Midway: Testing routes", ->
  tester = null;

  beforeEach ->
    tester.destroy() if tester
    tester = ngMidwayTester "routes"
    tester.inject 'ngRoute'
    return

  it "should have home route setted", (done)->
    tester.visit '/', ->
      expect(tester.viewElement().html()).to.contain('Fotbal')
      done();
      return
  return