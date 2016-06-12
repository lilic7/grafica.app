angular.module "routes", ['ngRoute', 'home.controller', 'match.controller', 'settings.service']

.config ($routeProvider, $locationProvider)->
  $routeProvider

  .when '/', {
      templateUrl: 'app/components/home/homeView.html'
      controller: 'HomeController'
      controllerAs: 'homeCtrl'
    }

  .when '/match/:matchType', {
      templateUrl: 'app/components/match/matchView.html'
      controller: 'MatchController'
      controllerAs: 'matchCtrl'
      resolve: {
        settings: ($route, $http, SettingsService)->
          matchType = $route.current.params.matchType
          SettingsService.setMatchType matchType
          $http.get('json/'+matchType+'.json').then (result)->
            SettingsService.setMatchSettings result.data
      }
    }
  $locationProvider.html5Mode true
  return