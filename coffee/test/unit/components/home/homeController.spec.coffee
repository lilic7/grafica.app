describe "home.controller", ->

  HomeController = null
  SettingsService = null
  SettingsFactory = null

  beforeEach module "home.controller"
  beforeEach module "settings.factory"
  beforeEach module "settings.service"

  beforeEach inject ($injector, $controller, $httpBackend)->
    HomeController = $controller "HomeController"
    SettingsFactory = $injector.get "SettingsFactory"
    SettingsService = $injector.get "SettingsService"
    $httpBackend.whenGET "json/sports.json"
      .respond {
        sports:
          [{
            "name": "fotbal",
            "show": true
          }]
        }
    SettingsFactory.setSports()
    $httpBackend.flush()
    return

  describe "HomeController", ->
    it "should init with matches equal to SettingsSertvice.sports", ->
      HomeController.matches = SettingsService.sports
      expect HomeController.matches
        .toBeDefined()
      expect HomeController.matches
        .toEqual [{
            "name": "fotbal",
            "show": true
          }]
      return
    return
  return  