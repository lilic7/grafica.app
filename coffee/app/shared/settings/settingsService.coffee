(->
  SettingsService = (ErrorService)->
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

    @.all = {}
    @.getSports = -> sports
    @.getMatchType = -> type
    @.setMatchType = (matchType)-> setMatchType(matchType)
    @.setMatchSettings = (settingsFromJson)-> setMatchSettings

    setMatchSettings = (settings, settingsFromJson)->
      settings.all = settingsFromJson

    setMatchType = (matchType)->
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

    return
  SettingsService.$inject = ['ErrorService']

  angular
    .module "settings.service",
      [
        'error.service'
      ]
    .service "SettingsService", SettingsService
)()