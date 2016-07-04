describe "settings.service", ->
  SettingsService = null
  mock = null

  beforeEach angular.mock.module "settings.service"

  beforeEach ->
    mock = {ErrorService: jasmine.createSpy()}

    module ($provide)->
      $provide.value "ErrorService", mock
      return

    inject (_SettingsService_)->
      SettingsService = _SettingsService_
      return
    return

  it "should exist", ->
    expect SettingsService
      .toBeDefined()
    return

  it "should return sports array", ->
    expect SettingsService.getSports()
      .toEqual jasmine.arrayContaining ["minifotbal"]
    return
    
  xit "should set matchType this type exists in sports array", ->
    SettingsService.setMatchType "fotbal"
    expect SettingsService.getMatchType()
      .toEqual 'fotbal'
    SettingsService.setMatchType "wrongMatchType"
    expect SettingsService.getMatchType()
      .toEqual 'wrongMatchType'
 

    return

  return