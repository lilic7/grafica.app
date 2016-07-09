describe "settings.service", ->
  SettingsService = null
  ErrorService = null

  beforeEach module "settings.service"

  beforeEach inject ($injector)->
    SettingsService = $injector.get 'SettingsService'
    return

  it "should exist", ->
    expect SettingsService
      .toBeDefined()
    return

  describe "getSport", ->
    it "should return sports array", ->
      expect(SettingsService.getSports()).toEqual jasmine.arrayContaining ["minifotbal"]
      expect(SettingsService.getSports()).toEqual jasmine.arrayContaining ["fotbal"]
      expect(SettingsService.getSports()).toEqual jasmine.arrayContaining ["tenis"]
      expect(SettingsService.getSports()).toEqual jasmine.arrayContaining ["handbal"]
      return

    it "should not containt other sports", ->
      expect(SettingsService.getSports()).not.toEqual jasmine.arrayContaining ['notMatch']
    return

  describe "setMatchType", ->
    
    it "should set matchType for correct type", ->
      SettingsService.setMatchType "fotbal"
      expect SettingsService.getMatchType()
        .toEqual 'fotbal'
      return

    describe "should rise ErrorService setMessage if the match type is incorect", ->

      beforeEach inject ($injector)->
        ErrorService = $injector.get "ErrorService"
        ErrorService.setMessage = jasmine.createSpy "setMessage"
        return

      it "should NOT set matchType if the type is incorrect", ->
        SettingsService.setMatchType "wrongMatchType"
        expect ErrorService.setMessage
          .toHaveBeenCalledWith("WRONG_MATCH_NAME")

        expect SettingsService.getMatchType()
          .not
          .toEqual 'wrongMatchType'

        expect SettingsService.getMatchType()
          .toEqual ''
        return

      return
    return

  describe "setMatchSettings", ->
    $httpBackend = null
    testRequest = null
    beforeEach inject ($injector)->
      $httpBackend = $injector.get "$httpBackend"
      testRequest = $httpBackend
        .whenGET "json/fotbal.json"
        .respond 200, {fotbalSettings: 'settings'}
      return

    afterEach ->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
      return

    describe "get settings from JSON file", ->
      it "should set matchSettings for correct matchType", ->
        SettingsService.setMatchType 'fotbal'

        SettingsService.getMatchSettings()
        $httpBackend.flush()

        return
      return

      it "should NOT make http request for incorrect matchType", ->
        SettingsService.setMatchType "whongMAtchType"
        testRequest.respond 404, {}
        SettingsService.getMatchSettings()
        $httpBackend.flush()
        return

    return

  return