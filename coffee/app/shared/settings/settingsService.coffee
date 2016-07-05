(->
  SettingsService = (ErrorService)->
    {
      all: {}
      getSports: getSports
      getMatchType: getMatchType
      setMatchType: (matchType)->  setMatchType matchType, ErrorService
      setMatchSettings: (settingsFromJson)-> setMatchSettings
    }

  sports = [
    'minifotbal'
    'fotbal'
    'futsal'
    'handbal'
    'baschet'
    'volei'
    'tenis'
  ]
  type = null
  getSports = ->
    sports

  getMatchType = ()->
    type

  setMatchSettings = (settings, settingsFromJson)->
    settings.all = settingsFromJson

  setMatchType = (matchType, ErrorService)->
    matchType = "" + matchType
    if checkMatchType(matchType) isnt -1
      type = matchType
    else
      type = ""
      ErrorService.setMessage "WRONG_MATCH_NAME"
    return

  checkMatchType = (matchType)->
    matchType = matchType.toLowerCase()
    sports.indexOf matchType

  SettingsService.$inject = ['ErrorService']

  angular
    .module "settings.service",
      [
        'error.service'
      ]
    .factory "SettingsService", SettingsService
)()