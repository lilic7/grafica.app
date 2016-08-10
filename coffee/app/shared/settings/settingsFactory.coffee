(->
  SettingsFactory = ($http, ErrorService, SettingsService, SportService)->
    {
      getMatchType: -> type
      getSettings:  -> SettingsService.settings
      setMatchType: (type)-> setMatchType type, ErrorService, SettingsService.sports
      setSettings:  -> setSettings $http, SettingsService
    }

  type = null

  setSettings = ($http, SettingsService)->
    if type
      success = (response)->
        SettingsService.settings = response.data
        return
      $http {method: "GET", url: "json/"+type+".json"} 
        .then success
      return
    else
      SettingsService.settings = {}
      return

  setMatchType = (matchType, ErrorService, sports)->
    matchType = "" + matchType
    if checkMatchType(matchType, sports)
      type = matchType
    else
      type = null
      ErrorService.setMessage "WRONG_MATCH_NAME"
    return

  checkMatchType = (matchType, sports)->
    matchType = matchType.toLowerCase()
    exist = false
    for sport in sports
      if matchType is sport.name
        exist = true
        break
    exist

  SettingsFactory.$ingect = ['$http', 'ErrorService', 'SettingsService', 'SportService']
  angular
    .module "settings.factory",
    [
      'error.service',
      'settings.service'
      'sport.service'
    ]
    .factory "SettingsFactory", SettingsFactory
)()