describe "home.controller", ->

  homeCtrl = null

  beforeEach module "home.controller"
  beforeEach module "settings.service", ($provide)->
    $provide.value "SettingsService", {
      getSports: ()-> ['minifotbal', 'fotbal']
    }
    return

  beforeEach inject ($controller)->
    homeCtrl = $controller "HomeController"
    return

  describe "HomeController", ->
    it "matches has to be a non empty array", ->
      expect homeCtrl.matches
        .toBeDefined()
      expect homeCtrl.matches
        .toEqual jasmine.arrayContaining ['minifotbal']
      return
    return
  return  