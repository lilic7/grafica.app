(->
  SettingsService = ($http, ErrorService)->
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
    @.getMatchSettings = -> getMatchSettings($http, type)

    getMatchSettings = ($http, type)->
      if type
        $http.get "json/"+type+".json"
      return

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

  SettingsService.$inject = ['$http', 'ErrorService']

  angular
    .module "settings.service",
      [
        'error.service'
      ]
    .service "SettingsService", SettingsService
)()