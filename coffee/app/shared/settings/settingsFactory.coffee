(->
  SettingsFactory = ($http, ErrorService, SettingsService)->
    {
      getMatchType: -> type
      getSettings: -> SettingsService.settings
      getSports: -> sports
      setMatchType: (type)-> setMatchType(type, ErrorService)
      setSettings: -> setSettings($http, SettingsService)
      setSports: -> setSports($http)
    }

  type = null
  sports = {}

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

  setSports = ($http)->
    success = (response)->
      sports = response.data
      return
    $http {method: "GET", url: "json/sports.json"}
      .then success
    return

  setMatchType = (matchType, errorService)->
    matchType = "" + matchType
    if checkMatchType(matchType)
      type = matchType
    else
      type = null
      errorService.setMessage "WRONG_MATCH_NAME"
    return

  checkMatchType = (type)->
    type = type.toLowerCase()
    exist = false
    sportsNames = sports['sports']
    for sport in sportsNames
      if type is sport.name
        exist = true
        break
    return exist

  SettingsFactory.$ingect = ['$http', 'ErrorService', 'SettingsService']
  angular
    .module "settings.factory",
    [
      'error.service',
      'settings.service'
    ]
    .factory "SettingsFactory", SettingsFactory
)()