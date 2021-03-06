(function() {
  var config;
  config = function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      resolve: {
        sports: function(SportService) {
          SportService.setSports();
        }
      }
    }).when('/match/:matchType', {
      templateUrl: 'app/components/match/matchView.html',
      controller: 'MatchController',
      controllerAs: 'matchCtrl',
      resolve: {
        settings: function($route, SettingsFactory) {
          SettingsFactory.setMatchType($route.current.params.matchType);
          SettingsFactory.setSettings();
        }
      }
    }).when('/templates', {
      templateUrl: 'app/components/templates/templateView.html',
      controller: 'TemplateController',
      controllerAs: 'templateCtrl'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  };
  return angular.module("routes", ['ngRoute', 'home.controller', 'match.controller', 'sport.service', 'settings.factory']).config(config);
})();
