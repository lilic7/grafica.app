angular.module "settings.service", ['error.service']

.factory "SettingsService", ($http, ErrorService)->

  type = ''

  settings = {}

  settings.sports = [
    'minifotbal'
    'fotbal'
    'futsal'
    'handbal'
    'baschet'
    'volei'
    'tenis'
  ]

  settings.all = {}

  settings.getMatchType = ()->
    type
  
  settings.setMatchSettings = (settingsFromJson)->
    settings.all = settingsFromJson

  settings.setMatchType = (matchType)->                 #initializare in MatchView - functia setRoute()
    if checkMatchType(matchType) isnt -1
      type = matchType
    else
      ErrorService.setMessage "WRONG_MATCH_NAME"
    return

  checkMatchType = (matchType)->
    matchType = matchType.toLowerCase()
    settings.sports.indexOf matchType

  settings