(function() {
  var config;
  config = function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      resolve: {
        sports: function(SettingsFactory) {
          return SettingsFactory.setSports();
        }
      }
    }).when('/match/:matchType', {
      templateUrl: 'app/components/match/matchView.html',
      controller: 'MatchController',
      controllerAs: 'matchCtrl',
      resolve: {
        settings: function($route, SettingsFactory) {
          SettingsFactory.setMatchType($route.current.params.matchType);
          return SettingsFactory.setSettings();
        }
      }
    });
    $locationProvider.html5Mode(true);
  };
  return angular.module("routes", ['ngRoute', 'home.controller', 'match.controller', 'settings.factory', 'error.service']).config(config);
})();
