describe "UNIT: settings.factory", ->
  settingsFactory = null
  errorService = null
  $httpBackend = null
  matchSettings =
    reprize: 2
    timer: true
    repriza: 45
    pauza: 15

  sports = [
    { "name": "fotbal", "show": true }
    { "name": "handbal", "show": true }
  ]

  beforeEach module 'settings.factory'
  beforeEach module 'sport.service'

  beforeEach inject ($injector)->
    $httpBackend = $injector.get "$httpBackend"
    settingsFactory = $injector.get "SettingsFactory"
    errorService = $injector.get "ErrorService"
    sportService = $injector.get "SportService"
    spyOn sportService, "getSelected"
      .and
      .returnValue sports
    spyOn errorService, "setMessage"
    return

  describe "setMatchType", ->

    it "should set matchType if given sport is present in sports array", ->
      settingsFactory.setMatchType "fotbal"
      expect(settingsFactory.getMatchType()).toEqual "fotbal"
      return

    it "should NOT set matchType if sport is NOT present in sports array", ->
        settingsFactory.setMatchType "WrongMatchType"
        expect(settingsFactory.getMatchType()).toBeNull()
        expect(errorService.setMessage).toHaveBeenCalledWith "WRONG_MATCH_NAME"
        return

    return


  describe "setSettings", ->

    beforeEach ->
      $httpBackend
        .whenGET "json/fotbal.json"
        .respond 200, matchSettings
      return

    afterEach ->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
      return

    it "should make HTTP request for correct matchType", ->
      settingsFactory.setMatchType "fotbal"
      settingsFactory.setSettings()
      $httpBackend.flush()
      expect(errorService.setMessage).not.toHaveBeenCalled()
      expect(settingsFactory.getSettings()).toEqual matchSettings
      return

    it "should NOT make HTTP request for incorrect matchType", ->
      settingsFactory.setMatchType "wrongMatchType"
      settingsFactory.setSettings()
      expect(settingsFactory.getSettings()).toEqual {}
      return

    return
  return