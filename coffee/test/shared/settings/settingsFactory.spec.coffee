describe "settings.factory", ->
  settingsFactory = null
  ErrorService = null

  beforeEach module 'settings.factory'

  beforeEach inject ($injector)->
    settingsFactory = $injector.get "SettingsFactory"
    return
                                                              # HTTP
  describe "HttpRequests", ->
    $httpBackend = null

    beforeEach inject ($injector)->
      $httpBackend = $injector.get "$httpBackend"
      ErrorService = $injector.get "ErrorService"
      spyOn ErrorService, "setMessage"
      $httpBackend
        .whenGET "json/sports.json"
        .respond 200, sports_obj
      return

    afterEach ->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
      return

    describe "getSports", ->

      beforeEach ->
        settingsFactory.setSports()  #makes HTTP request to json/sports.json
        return

      it "should get sports Object through HTTP get", ->
        expect(settingsFactory.getSports()).toBeUndefined()
        $httpBackend.flush()
        expect(settingsFactory.getSports()).toEqual sports_arr
        return
      return

    describe "setMatchType", ->

      beforeEach ->
        settingsFactory.setSports()  #makes HTTP request to json/sports.json
        return

      it "should set match type if type exists in sports array", ->
        $httpBackend.flush()
        settingsFactory.setMatchType "fotbal"
        expect(settingsFactory.setMatchType "fotbal").toEqual sports_arr
        expect(settingsFactory.getMatchType()).toEqual 'fotbal'
        return

      it "should throw ErrorService error for wrongMatchType", ->
        $httpBackend.flush()
        settingsFactory.setMatchType "wrongType"
        expect(settingsFactory.getMatchType()).toBeNull()
        expect(ErrorService.setMessage).toHaveBeenCalledWith "WRONG_MATCH_NAME"
        return

      return


    describe "setSettings", ->

      beforeEach ->
        settingsFactory.setSports()  #makes HTTP request to json/sports.json
        $httpBackend
          .whenGET "json/fotbal.json"
          .respond 200, matchSettings
        return

      it "should make HTTP request for correct matchType", ->

        $httpBackend.flush 1
        settingsFactory.setMatchType "fotbal"
        settingsFactory.setSettings()
        $httpBackend.flush()
        expect(ErrorService.setMessage).not.toHaveBeenCalled()
        expect(settingsFactory.getSettings()).toEqual matchSettings
        return

      it "should NOT make HTTP request for incorrect matchType", ->
        $httpBackend.flush 1
        settingsFactory.setMatchType "wrongMatchType"
        settingsFactory.setSettings()
        expect(ErrorService.setMessage).toHaveBeenCalled()
        expect(settingsFactory.getSettings()).toEqual {}
        return
      return

    return

  return

sports_obj = {sports:
  [{
    "name": "fotbal"
    "show": true
  }]
}

sports_arr = [{
  "name": "fotbal"
  "show": true
}]

matchSettings = {fotbal: "settings"}