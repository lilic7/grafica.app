angular.module("app", ['ngMaterial', 'routes', 'ucfirstFilter']);

angular.module("routes", ['ngRoute', 'home.controller', 'match.controller', 'settings.service', 'error.service']).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  }).when('/match/:matchType', {
    templateUrl: 'app/components/match/matchView.html',
    controller: 'MatchController',
    controllerAs: 'matchCtrl',
    resolve: {
      settings: ["$route", "$http", "SettingsService", function($route, $http, SettingsService) {
        var matchType;
        matchType = $route.current.params.matchType;
        SettingsService.setMatchType(matchType);
        return $http.get('json/' + matchType + '.json').then(function(result, error) {
          if (error) {
            return ErrorService.setMessage("WRONG_MATCH_NAME");
          } else {
            return SettingsService.setMatchSettings(result.data);
          }
        });
      }]
    }
  });
  $locationProvider.html5Mode(true);
}]);

angular.module("ucfirstFilter", []).filter('ucfirst', function() {
  return function(input) {
    var out;
    input = input || "";
    out = "";
    out = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    return out;
  };
});

angular.module("wordFirstFilter", []).filter('wordFirst', function() {
  return function(input) {
    var out;
    input = input || "";
    out = "";
    out = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    return out;
  };
});

angular.module("home.controller", ['settings.service']).controller("HomeController", ["SettingsService", function(SettingsService) {
  var vm;
  vm = this;
  vm.matches = SettingsService.sports;
}]);

angular.module("match.controller", ['team.form.directive', 'game.directive', 'settings.directive', 'game.service', 'settings.service']).controller('MatchController', ["GameService", "SettingsService", function(GameService, SettingsService) {
  var vm;
  vm = this;
  vm.team1 = GameService.team1;
  vm.team2 = GameService.team2;
  vm.settings = SettingsService.all;
}]);

angular.module("error.service", ['error.toast.controller']).factory("ErrorService", ["$mdToast", "$location", function($mdToast, $location) {
  var factory, messages, showMessage;
  showMessage = '';
  messages = {
    WRONG_MATCH_NAME: {
      message: "Acest tip de meci nu exista",
      redirect: true
    },
    MATCH_TOO_LONG: {
      message: "Durata meciului a trecut de limitele normale",
      redirect: false
    },
    NEGATIVE_TIME: {
      message: "SFAT: Reseteaza contorul!",
      redirect: false
    }
  };
  factory = {};
  factory.showToast = false;
  factory.getMessage = function() {
    return showMessage;
  };
  factory.setMessage = function(msgCode) {
    if (!factory.showToast) {
      factory.showToast = true;
      showMessage = messages[msgCode].message;
      $mdToast.show({
        hideDelay: 3000,
        position: 'top right',
        controller: "ToastController",
        controllerAs: "toastCtrl",
        templateUrl: 'app/shared/error/toast/toastView.html'
      }).then(function() {
        factory.showToast = false;
        if (messages[msgCode].redirect) {
          return $location.url("/");
        }
      });
    }
  };
  return factory;
}]);

angular.module("game.controller", ['game.service', 'team.directive']).controller("GameController", ["GameService", "SettingsService", function(GameService, SettingsService) {
  var vm;
  vm = this;
  vm.settings = SettingsService.all;
  vm.team1 = GameService.team1;
  vm.team2 = GameService.team2;
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
  var factory, prepare;
  factory = {};
  factory.team1 = {
    name: "",
    player_txt: "",
    reserve_txt: "",
    player_list: [],
    reserve_list: [],
    renderPlayer: function() {
      return factory.team1.player_list = prepare(factory.team1.player_txt);
    },
    renderReserve: function() {
      return factory.team1.reserve_list = prepare(factory.team1.reserve_txt);
    }
  };
  factory.team2 = {
    name: "",
    player_txt: "",
    reserve_txt: "",
    player_list: [],
    reserve_list: [],
    renderPlayer: function() {
      return factory.team2.player_list = prepare(factory.team2.player_txt);
    },
    renderReserve: function() {
      return factory.team2.reserve_list = prepare(factory.team2.reserve_txt);
    }
  };
  prepare = function(text) {
    var text_arr;
    text_arr = text.split("\n");
    return text_arr.sort(function(a, b) {
      a = a.split(" ");
      b = b.split(" ");
      return a[0] - b[0];
    });
  };
  return factory;
});

angular.module("player.controller", ['ucfirstFilter']).controller("PlayerController", function() {
  var vm;
  vm = this;
  vm.player = {};
  vm.preparePlayer = function(data) {
    var parts;
    data = data.replace(/( +)/g, " ");
    parts = data.split(" ");
    return vm.player = {
      number: parts[0],
      name: parts[1] + " " + parts[2]
    };
  };
});

angular.module("player.directive", ['player.controller', 'ucfirstFilter']).directive("playerCard", function() {
  return {
    restrict: "E",
    scope: {
      player: "="
    },
    link: function(scope, element, attrs, playerCtrl) {
      return playerCtrl.preparePlayer(scope.player);
    },
    controller: "PlayerController",
    controllerAs: "playerCtrl",
    templateUrl: "app/shared/player/playerView.html"
  };
});

angular.module("settings.controller", ['settings.service']).controller("SettingsController", ["$routeParams", "SettingsService", function($routeParams, SettingsService) {
  var vm;
  vm = this;
  vm.matchType = SettingsService.getMatchType();
  vm.settings = SettingsService.all;
}]);

angular.module("settings.directive", ['settings.controller', 'settings.rezerve.directive', 'settings.offside.directive', 'settings.corner.directive', 'settings.departajari.directive', 'settings.repriza.directive', 'settings.pauza.directive', 'settings.timer.directive']).directive("settings", function() {
  return {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
});

angular.module("settings.service", ['error.service']).factory("SettingsService", ["$http", "ErrorService", function($http, ErrorService) {
  var checkMatchType, settings, type;
  type = '';
  settings = {};
  settings.sports = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
  settings.all = {};
  settings.getMatchType = function() {
    return type;
  };
  settings.setMatchSettings = function(settingsFromJson) {
    return settings.all = settingsFromJson;
  };
  settings.setMatchType = function(matchType) {
    if (checkMatchType(matchType) !== -1) {
      type = matchType;
    } else {
      ErrorService.setMessage("WRONG_MATCH_NAME");
    }
  };
  checkMatchType = function(matchType) {
    matchType = matchType.toLowerCase();
    return settings.sports.indexOf(matchType);
  };
  return settings;
}]);

angular.module("team.controller", []).controller("TeamController", function() {
  var vm;
  vm = this;
  vm.team = {};
  vm.setTeam = function(team) {
    return vm.team = team;
  };
  vm.render = function() {
    vm.player_list = vm.team.player_list.split("\n");
    vm.reserve_list = vm.team.reserve_list.split("\n");
  };
});

angular.module("team.directive", ['player.directive']).directive("teamList", function() {
  return {
    restrict: "E",
    scope: {
      team: "="
    },
    templateUrl: "app/shared/team/teamView.html"
  };
});

angular.module("timer.controller", ['timer.service', 'settings.service']).controller("TimerController", ["TimerService", "SettingsService", function(TimerService, SettingsService) {
  var vm;
  vm = this;
  vm.repriza = 1;
  vm.settings = SettingsService.all;
  vm.timerService = TimerService;
  vm.setRepriza = function(repriza) {
    TimerService.modify((repriza - 1) * vm.settings.repriza);
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

angular.module("timer.service", []).factory('TimerService', ["$interval", "ErrorService", "SettingsService", function($interval, ErrorService, SettingsService) {
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
    if (totalSeconds > 600 && timerIsRunning) {
      ErrorService.setMessage("MATCH_TOO_LONG");
    }
    totalSeconds += minutes * 60;
    calculateTime();
  };
  factory.sub = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    if (totalSeconds > seconds) {
      totalSeconds -= seconds;
      calculateTime();
    } else {
      ErrorService.setMessage("NEGATIVE_TIME");
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

angular.module("error.toast.controller", ['error.service']).controller("ToastController", ["ErrorService", function(ErrorService) {
  var vm;
  vm = this;
  vm.message = ErrorService.getMessage();
  vm.hide = function() {
    return ErrorService.hide();
  };
}]);

angular.module("team.form.directive", []).directive("teamForm", function() {
  return {
    restrict: "E",
    scope: {
      team: "=",
      settings: "="
    },
    templateUrl: "app/shared/team/form/formView.html"
  };
});

angular.module("settings.corner.directive", []).directive("settingsCorner", function() {
  return {
    restrict: "E",
    scope: {
      cornere: "="
    },
    templateUrl: "app/shared/settings/components/corner/cornerView.html"
  };
});

angular.module("settings.departajari.directive", []).directive("settingsDepartajari", function() {
  return {
    restrict: "E",
    scope: {
      departajari: "="
    },
    templateUrl: "app/shared/settings/components/departajari/departajariView.html"
  };
});

angular.module("settings.offside.directive", []).directive("settingsOffside", function() {
  return {
    restrict: "E",
    scope: {
      offside: "="
    },
    templateUrl: "app/shared/settings/components/offside/offsideView.html"
  };
});

angular.module("settings.pauza.directive", []).directive("settingsPauza", function() {
  return {
    restrict: "E",
    scope: {
      pauza: "="
    },
    templateUrl: "app/shared/settings/components/pauza/pauzaView.html"
  };
});

angular.module("settings.repriza.directive", []).directive("settingsRepriza", function() {
  return {
    restrict: "E",
    scope: {
      repriza: "="
    },
    templateUrl: "app/shared/settings/components/repriza/reprizaView.html"
  };
});

angular.module("settings.rezerve.directive", []).directive("settingsRezerve", function() {
  return {
    restrict: "E",
    scope: {
      rezerve: "="
    },
    templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
  };
});

angular.module("settings.timer.directive", []).directive("settingsTimer", function() {
  return {
    restrict: "E",
    scope: {
      timer: "="
    },
    templateUrl: "app/shared/settings/components/timer/timerView.html"
  };
});
