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

angular.module("match.controller", ['teamInfo.directive', 'settings.directive', 'game.directive']).controller('MatchController', ["$routeParams", function($routeParams) {
  var vm;
  vm = this;
  vm.matchType = $routeParams.matchType;
  vm.team1 = {
    name: "The team 1"
  };
  vm.team2 = {
    name: "The team 2"
  };
}]);

angular.module("game.controller", []).controller("GameController", function() {
  var vm;
  return vm = this;
});

angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", function() {
  return {
    restrict: 'E',
    templateUrl: "app/shared/game/gameView.html",
    controller: "GameController",
    controllerAs: "gameCtrl"
  };
});

angular.module("settings.controller", ['settings.service']).controller("SettingsController", ["SettingsFactory", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
}]);

angular.module("settings.directive", ['settings.controller']).directive("settings", function() {
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
    scope: {
      team: "="
    },
    templateUrl: "app/shared/teamInfo/teamInfoView.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  };
});

angular.module("timer.controller", ['timer.service']).controller("TimerController", ["TimerService", function(TimerService) {
  var vm;
  vm = this;
  vm.repriza = 1;
  vm.durataRepriza = 45;
  vm.timerService = TimerService;
  vm.reset = function() {
    vm.timerService.reset();
    vm.repriza = 1;
  };
  vm.setRepriza = function(repriza) {
    vm.timerService.changeTotalSeconds((repriza - 1) * vm.durataRepriza);
    vm.repriza = repriza;
  };
}]);

angular.module("timer.directive", ['timer.controller']).directive("timer", function() {
  return {
    restrict: 'E',
    templateUrl: 'app/shared/timer/timerView.html',
    controller: "TimerController",
    controllerAs: "timerCtrl"
  };
});

angular.module("timer.service", []).factory('TimerService', ["$interval", function($interval) {
  var calculateMinutes, calculateTime, factory, playMinutes, startTime, time, timer, timerIsRunning, totalMinutes, totalSeconds;
  startTime = 10;
  totalSeconds = 3600;
  playMinutes = "01";
  totalMinutes = "00";
  timerIsRunning = false;
  time = "00:10";
  factory = {};
  factory.isOn = function() {
    return timerIsRunning;
  };
  factory.getTotalMinutes = function() {
    return totalMinutes;
  };
  factory.getPlayMinutes = function() {
    calculateTime();
    return playMinutes;
  };
  factory.getTime = function() {
    return time;
  };
  factory.start = function() {
    if (!timerIsRunning) {
      factory.timerInterval = $interval(timer, 1000);
    }
  };
  factory.stop = function() {
    $interval.cancel(factory.timerInterval);
    timerIsRunning = false;
  };
  factory.reset = function() {
    totalSeconds = startTime;
    factory.stop();
    calculateTime();
  };
  factory.changeTotalSeconds = function(minutes) {
    totalSeconds = minutes * 60 + startTime;
    calculateTime();
  };
  factory.modifyMinutes = function(minutes) {
    totalSeconds = minutes * 60 + 55;
    calculateTime();
  };
  timer = function() {
    ++totalSeconds;
    calculateTime();
    timerIsRunning = true;
  };
  calculateMinutes = function(seconds) {
    var minute;
    minute = Math.floor(seconds / 60);
    if (minute < 10) {
      return '0' + minute;
    } else {
      return minute;
    }
  };
  calculateTime = function() {
    var hour, minute, seconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);
    totalMinutes = calculateMinutes(totalSeconds);
    playMinutes = calculateMinutes(totalSeconds + 60);
    time = totalMinutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
  };
  return factory;
}]);
