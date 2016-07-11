(->
  config = ($routeProvider, $locationProvider)->
    
    $routeProvider
    .when '/', {
      templateUrl: 'app/components/home/homeView.html'
      controller: 'HomeController'
      controllerAs: 'homeCtrl',
      resolve:
        sports: (SettingsFactory)->
          
    }

    .when '/match/:matchType', {
      templateUrl: 'app/components/match/matchView.html'
      controller: 'MatchController'
      controllerAs: 'matchCtrl'
      resolve:
        settings: ($route, $http, SettingsService)->
          matchType = $route.current.params.matchType
          SettingsService.setMatchType matchType
          $http
            .get 'json/'+matchType+'.json'
            .then (result, error)->
              if error
                ErrorService.setMessage "WRONG_MATCH_NAME"
              else
                SettingsService.setMatchSettings result.data
    }
    $locationProvider.html5Mode true
    return

  angular
    .module "routes",
      [
        'ngRoute'
        'home.controller'
        'match.controller'
        'settings.service'
        'error.service'
      ]
    .config config
)()

