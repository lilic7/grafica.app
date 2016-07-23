describe "Midway: Routes Module", ->
  module = null

  beforeEach ->
    module = angular
      .module "routes"
    return

  it "should be registred", ->
    expect module
      .not
      .toEqual null
    return

  describe "Dependances: ", ->
    deps = null

    hasModule = (m)->
      deps.indexOf(m) >= 0

    beforeEach ->
      deps = module
        .value 'app'
        .requires

    it "should have ngRoute dependancy", ->
      expect hasModule 'ngRoute'
        .toEqual true
      return

    it "should have home.controller dependancy", ->
      expect hasModule 'home.controller'
        .toEqual true
      return

    it "should have match.controller dependancy", ->
      expect hasModule 'match.controller'
        .toEqual true
      return

    it "should have settings.factory dependancy", ->
      expect hasModule 'settings.factory'
        .toEqual true
      return

  describe "Paths", ->
    tester = null;

    beforeEach ->
      tester.destroy() if tester
      tester = ngMidwayTester "app"
      return

    it "should have /match/fotbal route setted", ->
      expect ROUTER.routeDefined '/match/fotbal'
        .toEqual true
      return
    return
  return