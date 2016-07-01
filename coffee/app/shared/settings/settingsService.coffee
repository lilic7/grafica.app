angular.module "settings.service",
  [
    'error.service'
  ]

.factory "SettingsService", ($http, ErrorService)->

  type = ''

  settings = {}

  sports = [
    'minifotbal'
    'fotbal'
    'futsal'
    'handbal'
    'baschet'
    'volei'
    'tenis'
  ]

  settings.getSports = ->
    sports

  settings.all = {}

  settings.getMatchType = ()->
    type
  
  settings.setMatchSettings = (settingsFromJson)->
    settings.all = settingsFromJson

  settings.setMatchType = (matchType)->
    if checkMatchType(matchType) isnt -1
      type = matchType
    else
      ErrorService.setMessage "WRONG_MATCH_NAME"
    return

  checkMatchType = (matchType)->
    matchType = matchType.toLowerCase()
    sports.indexOf matchType

  settings