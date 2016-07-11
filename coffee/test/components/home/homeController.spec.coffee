xdescribe "home.controller", ->

  HomeController = null
  SettingsService = null

  beforeEach module "home.controller"

  beforeEach inject ($injector)->
    $controller = $injector.get "$controller"
    HomeController = $controller "HomeController"
    SettingsService
    return

  describe "HomeController", ->
    it "matches has to be a non empty array", ->
      homeCtrl.matches = settings.getSports()
      expect homeCtrl.matches.toBeDefined()
      expect homeCtrl.matches.toEqual jasmine.arrayContaining ['minifotbal']
      return
    return
  return  