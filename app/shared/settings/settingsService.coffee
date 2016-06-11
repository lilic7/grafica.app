angular.module "settings.service", ['error.service']

.factory "SettingsService", (ErrorService)->

  settings = {}
  all = {
    matches: [
      'minifotbal'
      'fotbal'
      'futsal'
      'handbal'
      'baschet'
      'volei'
      'tenis'
    ]
    match: ''
    minifotbal: {
      team: "Best Team"
      rezerve: false
      offside: false
      corner: false
      repriza: 25 #minutes
    }
    fotbal: {
      rezerve: true
      offside: false
      corner: false
      repriza: 45 #minutes
    }
  }

  settings.getMatch = ()->
    all.match

  settings.matchSettings = ()->
    all[all.match]

  settings.setCurrent = (matchType)->
    if checkMatchType(matchType) isnt -1
      all.match = matchType
    else
      ErrorService.setMessage "WRONG_MATCH_NAME"
    return

  checkMatchType = (matchType)->
    matchType = matchType.toLowerCase()
    all.matches.indexOf matchType

  settings