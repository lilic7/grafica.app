angular.module("app", ['ngMaterial', 'routes', 'ucfirstFilter']);

angular.module("routes", ['ngRoute', 'home.controller', 'match.controller']).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  }).when('/match/:matchType', {
    templateUrl: 'app/components/match/matchView.html',
    controller: 'MatchController',
    controllerAs: 'matchCtrl'
  }).otherwise({
    redirectTo: "/"
  });
  $locationProvider.html5Mode(true);
}]);

angular.module("ucfirstFilter", []).filter('ucfirst', function() {
  return function(input) {
    var out;
    input = input || "";
    out = "";
    out = input.charAt(0).toUpperCase() + input.substr(1);
    return out;
  };
});

angular.module("home.controller", []).controller("HomeController", function() {
  var vm;
  vm = this;
  vm.matches = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
});

angular.module("match.controller", ['teamInfo.directive', 'settings.directive']).controller('MatchController', ["$routeParams", function($routeParams) {
  var vm;
  vm = this;
  vm.matchType = $routeParams.matchType;
}]);

angular.module("settings.controller", ['settings.service']).controller("SettingsController", ["SettingsFactory", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
}]);

angular.module("settings.directive", ['settings.controller']).directive("matchSettings", function() {
  return {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
});

angular.module("settings.service", []).factory("SettingsFactory", function() {
  var settings;
  settings = {};
  settings.rezerve = true;
  return settings;
});

angular.module("teamInfo.controller", ['settings.service']).controller("TeamInfoController", ["SettingsFactory", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
}]);

angular.module("teamInfo.directive", ['teamInfo.controller']).directive("teamInfo", function() {
  return {
    restrict: "E",
    templateUrl: "app/shared/teamInfo/teamInfoView.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  };
});
