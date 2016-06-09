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

angular.module("match.controller", ['team.directive', 'game.directive', 'settings.directive']).controller('MatchController', ["$routeParams", function($routeParams) {
  var vm;
  vm = this;
  vm.matchType = $routeParams.matchType;
  vm.team1 = {
    name: "Stanga"
  };
  vm.team2 = {
    name: "Dreapta"
  };
}]);

angular.module("home.controller", []).controller("HomeController", function() {
  var vm;
  vm = this;
  vm.matches = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
});

angular.module("game.controller", ['game.service']).controller("GameController", ["GameService", function(GameService) {
  var vm;
  vm = this;
  vm.gameService = GameService;
}]);

angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", function() {
  return {
    restrict: 'E',
    templateUrl: "app/shared/game/gameView.html",
    controller: "GameController",
    controllerAs: "gameCtrl"
  };
});

angular.module("game.service", []).factory("GameService", function() {
  var factory, penalty, score;
  factory = {};
  score = "0 : 0";
  penalty = "0 : 01";
  factory.getScore = function() {
    return score;
  };
  factory.getPenaltyScore = function() {
    return penalty;
  };
  return factory;
});

angular.module("settings.controller", ['settings.service']).controller("SettingsController", ["SettingsService", function(SettingsService) {
  var vm;
  vm = this;
  vm.settingsService = SettingsService;
}]);

angular.module("settings.directive", ['settings.controller']).directive("settings", function() {
  return {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
});

angular.module("settings.service", []).factory("SettingsService", function() {
  var settings;
  settings = {};
  settings.rezerve = true;
  return settings;
});

angular.module("team.controller", ['settings.service', 'team.service']).controller("TeamController", ["SettingsService", "TeamService", function(SettingsService, TeamService) {
  var vm;
  vm = this;
  vm.settingsService = SettingsService;
  vm.teamService = TeamService;
}]);

angular.module("team.directive", ['team.controller']).directive("team", function() {
  return {
    restrict: "E",
    scope: {
      team: "="
    },
    templateUrl: "app/shared/team/teamView.html",
    controller: "TeamController",
    controllerAs: "teamCtrl"
  };
});

angular.module("team.service", []).factory("TeamService", function() {
  var factory;
  factory = {};
  factory.teams = [];
  return factory;
});

angular.module("timer.controller", ['timer.service']).controller("TimerController", ["TimerService", function(TimerService) {
  var vm;
  vm = this;
  vm.repriza = 1;
  vm.durataRepriza = 45;
  vm.timerService = TimerService;
  vm.setRepriza = function(repriza) {
    TimerService.modify((repriza - 1) * vm.durataRepriza);
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
  var calculateTime, factory, playMinutes, startTime, time, timer, timerInterval, timerIsRunning, toMinutes, totalMinutes, totalSeconds;
  startTime = 10;
  totalSeconds = 10;
  totalMinutes = "00";
  playMinutes = "01";
  timerIsRunning = false;
  time = "00:10";
  timerInterval = null;
  factory = {};
  factory.isOn = function() {
    return timerIsRunning;
  };
  factory.getTotalMinutes = function() {
    return totalMinutes;
  };
  factory.getPlayMinutes = function() {
    return playMinutes;
  };
  factory.getTime = function() {
    return time;
  };
  factory.start = function() {
    if (!timerIsRunning) {
      timerInterval = $interval(timer, 1000);
    }
  };
  factory.stop = function() {
    $interval.cancel(timerInterval);
    timerIsRunning = false;
  };
  factory.modify = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    totalSeconds = seconds + startTime;
    calculateTime();
  };
  factory.add = function(minutes) {
    totalSeconds += minutes * 60;
    calculateTime();
  };
  factory.sub = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    if (totalSeconds > seconds) {
      totalSeconds -= seconds;
      calculateTime();
    }
  };
  factory.addSeconds = function(seconds) {
    totalSeconds += seconds;
    return calculateTime();
  };
  timer = function() {
    ++totalSeconds;
    calculateTime();
    timerIsRunning = true;
  };
  toMinutes = function(seconds) {
    var minutes;
    minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
      return '0' + minutes;
    } else {
      return minutes;
    }
  };
  calculateTime = function() {
    var seconds;
    seconds = totalSeconds % 60;
    totalMinutes = toMinutes(totalSeconds);
    playMinutes = toMinutes(totalSeconds + 60);
    time = totalMinutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
  };
  return factory;
}]);
