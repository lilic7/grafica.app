(function() {
  return angular.module("app", ['ngMaterial', 'routes', 'ucfirstFilter']);
})();

(function() {
  var config;
  config = function($routeProvider, $locationProvider) {
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
          return $http.get('json/' + matchType + '.json').then(function(result, error) {
            if (error) {
              return ErrorService.setMessage("WRONG_MATCH_NAME");
            } else {
              return SettingsService.setMatchSettings(result.data);
            }
          });
        }
      }
    });
    $locationProvider.html5Mode(true);
  };
  return angular.module("routes", ['ngRoute', 'home.controller', 'match.controller', 'settings.service', 'error.service']).config(config);
})();

(function() {
  var ucfirst;
  ucfirst = function() {
    return function(input) {
      var out;
      input = input || "";
      out = "";
      out = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
      return out.trim();
    };
  };
  return angular.module("ucfirstFilter", []).filter('ucfirst', ucfirst);
})();

(function() {
  var rewrite, wordFirst;
  wordFirst = function() {
    return function(input) {
      var i, len, out, word, words;
      input = input || "";
      out = "";
      words = input.split(' ');
      for (i = 0, len = words.length; i < len; i++) {
        word = words[i];
        out += rewrite(word);
      }
      return out.trim();
    };
  };
  rewrite = function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() + " ";
  };
  return angular.module("wordFirstFilter", []).filter('wordFirst', wordFirst);
})();

(function() {
  var HomeController;
  HomeController = function(SettingsService) {
    var vm;
    vm = this;
    vm.matches = SettingsService.getSports();
  };
  HomeController.$inject = ['SettingsService'];
  return angular.module("home.controller", ['settings.service']).controller("HomeController", HomeController);
})();

(function() {
  var MatchController;
  MatchController = function(GameService, SettingsService) {
    var vm;
    vm = this;
    vm.team1 = GameService.team1;
    vm.team2 = GameService.team2;
    vm.settings = SettingsService.all;
  };
  return angular.module("match.controller", ['team.form.directive', 'game.directive', 'settings.directive', 'game.service', 'settings.service']).controller('MatchController', MatchController);
})();

(function() {
  var ErrorService;
  ErrorService = function($mdToast, $location) {
    var message, messages, redirect, showToast;
    message = "";
    redirect = false;
    showToast = false;
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
    this.setMessage = function(msgCode) {
      message = messages[msgCode].message;
      redirect = messages[msgCode].redirect;
      this.showMessage($mdToast, $location);
    };
    this.showMessage = function($mdToast, $location) {
      if (!showToast) {
        showToast = true;
        $mdToast.show({
          hideDelay: 3000,
          position: 'top right',
          controller: "ToastController",
          controllerAs: "toastCtrl",
          templateUrl: 'app/shared/error/toast/toastView.html'
        }).then(function() {
          this.showToast = false;
          if (redirect) {
            $location.url("/");
          }
        });
      }
    };
    this.getMessage = function() {
      return message;
    };
  };
  ErrorService.$inject = ['$mdToast', '$location'];
  return angular.module("error.service", ['error.toast.controller']).service("ErrorService", ErrorService);
})();

(function() {
  var GameController;
  GameController = function(GameService, SettingsService) {
    var vm;
    vm = this;
    vm.team1 = GameService.team1;
    vm.team2 = GameService.team2;
    vm.settings = SettingsService.all;
  };
  return angular.module("game.controller", ['game.service', 'team.directive']).controller("GameController", GameController);
})();

(function() {
  var game;
  game = function() {
    return {
      restrict: 'E',
      templateUrl: "app/shared/game/gameView.html",
      controller: "GameController",
      controllerAs: "gameCtrl"
    };
  };
  return angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", game);
})();

(function() {
  var GameService;
  GameService = function() {
    var prepare, team1, team2;
    prepare = function(text) {
      var text_arr;
      text_arr = text.split("\n");
      return text_arr.sort(function(a, b) {
        a = a.split(" ");
        b = b.split(" ");
        return a[0] - b[0];
      });
    };
    team1 = {
      name: "",
      player_txt: "7   SERGIU DONICĂ",
      reserve_txt: "6   MIHAI MUSTEA (C)",
      player_list: ["7   SERGIU DONICĂ"],
      reserve_list: ["6   MIHAI MUSTEA (C)"],
      renderPlayer: function() {
        return team1.player_list = prepare(team1.player_txt);
      },
      renderReserve: function() {
        return team1.reserve_list = prepare(team1.reserve_txt);
      }
    };
    team2 = {
      name: "",
      player_txt: "11  ALEXANDRU OLEINIC",
      reserve_txt: "8   VITALIE BUCȘAN",
      player_list: ["11  ALEXANDRU OLEINIC"],
      reserve_list: ["8   VITALIE BUCȘAN"],
      renderPlayer: function() {
        return team2.player_list = prepare(team2.player_txt);
      },
      renderReserve: function() {
        return team2.reserve_list = prepare(team2.reserve_txt);
      }
    };
    return {
      team1: team1,
      team2: team2
    };
  };
  return angular.module("game.service", []).factory("GameService", GameService);
})();

(function() {
  'use strict';
  var PlayerController, player, showAdvanced;
  PlayerController = function(PlayerService) {
    var vm;
    vm = this;
    vm.player = player;
    console.log(player);
    vm.showAdvanced = showAdvanced;
  };
  player = {};
  showAdvanced = function($mdDialog, ev) {
    $mdDialog.show({
      controller: 'PlayerActionsController',
      controllerAs: 'actionsCtrl',
      templateUrl: 'app/shared/player/actions/actionsView.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
  PlayerController.$inject = ['PlayerService', '$mdDialog'];
  return angular.module("player.controller", ['wordFirstFilter', 'player.actions.controller', 'player.service']).controller("PlayerController", PlayerController);
})();

angular.module("player.directive", ['player.controller', 'ucfirstFilter']).directive("playerCard", function() {
  return {
    restrict: "E",
    scope: {},
    bindToController: {
      player: "="
    },
    controller: "PlayerController",
    controllerAs: "playerCtrl",
    templateUrl: "app/shared/player/playerView.html"
  };
});

(function() {
  'use strict';
  var PlayerService;
  PlayerService = function() {
    var preparePlayer;
    preparePlayer = function(data) {
      var parts;
      data = data.replace(/( +)/g, " ");
      parts = data.split(" ");
      return {
        number: parts[0],
        name: parts[1] + " " + parts[2]
      };
    };
    return {
      preparePlayer: preparePlayer
    };
  };
  return angular.module("player.service", []).factory("PlayerService", PlayerService);
})();

(function() {
  var SettingsController;
  SettingsController = function($routeParams, SettingsService) {
    var vm;
    vm = this;
    vm.matchType = SettingsService.getMatchType();
    vm.settings = SettingsService.all;
  };
  SettingsController.$inject = ['$routeParams', 'SettingsService'];
  return angular.module("settings.controller", ['settings.service']).controller("SettingsController", SettingsController);
})();

angular.module("settings.directive", ['settings.controller', 'settings.rezerve.directive', 'settings.offside.directive', 'settings.corner.directive', 'settings.departajari.directive', 'settings.repriza.directive', 'settings.pauza.directive', 'settings.timer.directive']).directive("settings", function() {
  return {
    restrict: "E",
    templateUrl: "app/shared/settings/settingsView.html",
    controller: "SettingsController",
    controllerAs: "settingsCtrl"
  };
});

angular.module("settings.service", ['error.service']).factory("SettingsService", ["$http", "ErrorService", function($http, ErrorService) {
  var checkMatchType, settings, sports, type;
  type = '';
  settings = {};
  sports = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
  settings.getSports = function() {
    return sports;
  };
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
    return sports.indexOf(matchType);
  };
  return settings;
}]);

(function() {
  var TimerController;
  TimerController = function(TimerService, SettingsService) {
    var vm;
    vm = this;
    vm.repriza = 1;
    vm.settings = SettingsService.all;
    vm.timerService = TimerService;
    vm.setRepriza = function(repriza) {
      var minutes;
      minutes = (repriza - 1) * vm.settings.repriza;
      TimerService.modify(minutes);
      vm.repriza = repriza;
    };
  };
  TimerController.$inject = ['TimerService', 'SettingsService'];
  return angular.module("timer.controller", ['timer.service', 'settings.service']).controller("TimerController", TimerController);
})();

angular.module("timer.directive", ['timer.controller']).directive("timer", function() {
  return {
    restrict: 'E',
    templateUrl: 'app/shared/timer/timerView.html',
    controller: "TimerController",
    controllerAs: "timerCtrl"
  };
});

(function() {
  var TimerService, add, addSeconds, calculateTime, getPlayMinutes, getTime, getTotalMinutes, isOn, modify, playMinutes, start, startTime, stop, sub, time, timer, timerInterval, timerIsRunning, toMinutes, totalMinutes, totalSeconds;
  TimerService = function($interval, ErrorService, SettingsService) {
    return {
      add: function(minutes) {
        return add(minutes, ErrorService, SettingsService.all.repriza);
      },
      addSeconds: addSeconds,
      getPlayMinutes: getPlayMinutes,
      getTime: getTime,
      getTotalMinutes: getTotalMinutes,
      isOn: isOn,
      modify: modify,
      sub: function(minutes) {
        return sub(minutes, ErrorService);
      },
      start: function() {
        return start($interval);
      },
      stop: function() {
        return stop($interval);
      }
    };
  };
  startTime = 10;
  totalSeconds = 10;
  totalMinutes = "00";
  playMinutes = "01";
  timerIsRunning = false;
  time = "00:10";
  timerInterval = null;
  isOn = function() {
    return timerIsRunning;
  };
  getTotalMinutes = function() {
    return totalMinutes;
  };
  getPlayMinutes = function() {
    return playMinutes;
  };
  getTime = function() {
    return time;
  };
  start = function(interval) {
    if (!timerIsRunning) {
      timerInterval = interval(timer, 1000);
    }
    timerIsRunning = true;
  };
  stop = function(interval) {
    interval.cancel(timerInterval);
    timerIsRunning = false;
  };
  modify = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    totalSeconds = seconds + startTime;
    calculateTime();
  };
  add = function(minutes, ErrorService, durataRepriza) {
    durataRepriza = parseInt(durataRepriza);
    console.log(durataRepriza);
    if (totalSeconds > durataRepriza && timerIsRunning) {
      ErrorService.setMessage("MATCH_TOO_LONG");
    }
    totalSeconds += minutes * 60;
    calculateTime();
  };
  sub = function(minutes, ErrorService) {
    var seconds;
    seconds = minutes * 60;
    if (totalSeconds > seconds) {
      totalSeconds -= seconds;
      calculateTime();
    } else {
      ErrorService.setMessage("NEGATIVE_TIME");
    }
  };
  addSeconds = function(seconds) {
    totalSeconds += seconds;
    calculateTime();
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
  TimerService.$inject = ['$interval', 'ErrorService', 'SettingsService'];
  return angular.module("timer.service", []).factory("TimerService", TimerService);
})();

(function() {
  var TeamController;
  TeamController = function() {
    var render, setTeam, vm;
    vm = this;
    vm.team = {};
    vm.setTeam = setTeam;
    vm.render = render;
    setTeam = function(team) {
      return vm.team = team;
    };
    render = function() {
      vm.player_list = vm.team.player_list.split("\n");
      vm.reserve_list = vm.team.reserve_list.split("\n");
    };
  };
  return angular.module("team.controller", []).controller("TeamController", TeamController);
})();

angular.module("team.directive", ['player.directive']).directive("teamList", function() {
  return {
    restrict: "E",
    scope: {
      team: "="
    },
    templateUrl: "app/shared/team/teamView.html"
  };
});

(function() {
  var ToastController;
  ToastController = function(ErrorService) {
    var vm;
    vm = this;
    vm.message = ErrorService.getMessage();
  };
  ToastController.$inject = ['ErrorService'];
  return angular.module("error.toast.controller", ['error.service']).controller("ToastController", ToastController);
})();

angular.module("player.actions.controller", []).controller("PlayerActionsController", ["$mdDialog", function($mdDialog) {
  var vm;
  vm = this;
  vm.hide = function() {
    $mdDialog.hide();
  };
  vm.cancel = function() {
    $mdDialog.cancel();
  };
  vm.answer = function(answer) {
    $mdDialog.hide(answer);
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

angular.module("settings.timer.directive", []).directive("settingsTimer", function() {
  return {
    restrict: "E",
    scope: {
      timer: "="
    },
    templateUrl: "app/shared/settings/components/timer/timerView.html"
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
