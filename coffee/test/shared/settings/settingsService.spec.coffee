describe "settings.service", ->
  SettingsService = null
  ErrorService = null

  beforeEach ->
    module ($provide)->
      $provide.service "ErrorService", ->
        @.setMessage = jasmine.createSpy 'setMessage' 
        return

      return
    module "settings.service"
    return

  beforeEach inject (_SettingsService_, _ErrorService_)->
    SettingsService = _SettingsService_
    ErrorService = _ErrorService_
    return

  it "should exist", ->
    expect SettingsService
      .toBeDefined()
    return

  describe "getSport", ->
    it "should return sports array", ->
      expect SettingsService.getSports()
        .toEqual jasmine.arrayContaining ["minifotbal"]
      return
    return

  describe "setMatchType", ->
    it "should set matchType for correct type", ->
      SettingsService.setMatchType "fotbal"
      expect SettingsService.getMatchType()
        .toEqual 'fotbal'
      return

    it "should NOT set matchType if the type is incorrect", ->
      SettingsService.setMatchType "wrongMatchType"
      expect ErrorService.setMessage
        .toHaveBeenCalledWith 'WRONG_MATCH_NAME'
      expect SettingsService.getMatchType()
        .not
        .toEqual 'wrongMatchType'
      return
    return

  return