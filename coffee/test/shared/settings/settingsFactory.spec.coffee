describe "settings.factory", ->
  settingsFactory = null
  ErrorService = null
  SettingsService = null

  beforeEach module 'settings.factory'

  beforeEach inject ($injector)->
    settingsFactory = $injector.get "SettingsFactory"
#    SettingsService = $injector.get "SettingsService"
    return

  it "should exist", ->
    expect settingsFactory
      .toBeDefined()
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
        .respond 200,
          {sports:
            [{
              "name": "fotbal"
              "show": true
            }]
          }
      return

    afterEach ->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
      return
                                                                  #getSports
    describe "getSports", ->

      beforeEach ->
        settingsFactory.setSports()
        return

      it "should get sports Object through HTTP get", ->
        expect settingsFactory.getSports()
          .toEqual {}
        $httpBackend.flush()
        expect settingsFactory.getSports()
          .toEqual {sports:
              [{
                  "name": "fotbal"
                  "show": true
                }]
            }
        return

      describe "setMatchType", ->
        it "should set match type if is correct (exists in sports array)", ->
          $httpBackend.flush()
          settingsFactory.setMatchType "fotbal"
          expect settingsFactory.setMatchType "fotbal"
            .toEqual {sports:
              [{
                "name": "fotbal"
                "show": true
              }]
            }
          expect settingsFactory.getMatchType()
            .toEqual 'fotbal'
          return

        it "should throw ErrorService error for wrongMatchType", ->
          $httpBackend.flush()
          settingsFactory.setMatchType "wrongType"
          expect settingsFactory.getMatchType()
            .toBeNull()
          expect ErrorService.setMessage
            .toHaveBeenCalledWith "WRONG_MATCH_NAME"
          return

        return

      return

    describe "setSettings", ->

      beforeEach ->
        settingsFactory.setSports()
        return
      
      it "should make HTTP request for correct matchType", ->
        $httpBackend
          .whenGET "json/fotbal.json"
          .respond 200, {fotbal: "settings"}
        settingsFactory.setMatchType "fotbal"
        settingsFactory.setSettings()
        $httpBackend.flush()
        expect settingsFactory.getSports()
          .toEqual {sports:
            [{
              "name": "fotbal"
              "show": true
            }]
          }
        expect ErrorService.setMessage()
          .not
          .toHaveBeenCalled()
        expect settingsFactory.getSettings()
          .toEqual {fotbal: "settings"}
        return

      it "should NOT make HTTP request for incorrect matchType", ->
        settingsFactory.setMatchType "wrongMatchType"
        settingsFactory.setSettings()
        $httpBackend.flush()
        expect settingsFactory.getSettings()
          .toEqual {}
        return
      return

    return

  describe "setService", ->
    return

  return

