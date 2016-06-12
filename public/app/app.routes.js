angular.module("routes", ['ngRoute', 'home.controller', 'match.controller', 'settings.service']).config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  }).when('/match/:matchType', {
    templateUrl: 'app/components/match/matchView.html',
    controller: 'MatchController',
    controllerAs: 'matchCtrl',
    resolve: {
      settings: function($route, $http, SettingsService) {
        var matchType;
        matchType = $route.current.params.matchType;
        SettingsService.setMatchType(matchType);
        return $http.get('json/' + matchType + '.json').then(function(result) {
          return SettingsService.setMatchSettings(result.data);
        });
      }
    }
  });
  $locationProvider.html5Mode(true);
});
