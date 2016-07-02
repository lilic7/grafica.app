describe "home.controller", ->

  homeCtrl = null
  settings = null

  beforeEach module "settings.service"
  beforeEach module "home.controller"
  beforeEach module "ui.router"

  beforeEach inject ($controller, _SettingsService_)->
    settings = _SettingsService_
    spyOn settings, "getSports"
      .and.returnValue ['minifotbal', 'fotbal']
    homeCtrl = $controller "HomeController", {
      SettingsService: settings
    }
    return

  describe "HomeController", ->
    it "matches has to be a non empty array", ->
      homeCtrl.matches = settings.getSports()
      expect homeCtrl.matches.toBeDefined()
      expect homeCtrl.matches.toEqual jasmine.arrayContaining ['minifotbal']
      return
    return
  return  