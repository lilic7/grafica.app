(->
  SettingsFactory = ($http, ErrorService, SettingsService)->
    {
      getMatchType: -> type
      getSettings:  -> SettingsService.settings
      getSports:    -> SettingsService.sports
      setMatchType: (type)-> setMatchType type, ErrorService, SettingsService.sports
      setSettings:  -> setSettings $http, SettingsService
      setSports:    -> setSports $http, SettingsService
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

  setSports = ($http, SettingsService)->
    success = (response)->
      SettingsService.sports = response.data.sports
      return
    $http {method: "GET", url: "json/sports.json"}
      .then success
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

  SettingsFactory.$ingect = ['$http', 'ErrorService', 'SettingsService']
  angular
    .module "settings.factory",
    [
      'error.service',
      'settings.service'
    ]
    .factory "SettingsFactory", SettingsFactory
)()