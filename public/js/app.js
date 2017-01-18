(function() {
  return angular.module("app", ['ngMaterial', 'routes', 'ucfirstFilter']);
})();

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
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  };
  return angular.module("routes", ['ngRoute', 'home.controller', 'match.controller', 'sport.service', 'settings.factory']).config(config);
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
  HomeController = function(SportService) {
    var vm;
    vm = this;
    vm.matches = SportService.getSelected();
  };
  HomeController.$inject = ['SportService'];
  return angular.module("home.controller", ['sport.service']).controller("HomeController", HomeController);
})();

(function() {
  var MatchController;
  MatchController = function(GameService, SettingsService) {
    var vm;
    vm = this;
    vm.team1 = GameService.team1;
    vm.team2 = GameService.team2;
    vm.settings = SettingsService.settings;
  };
  return angular.module("match.controller", ['team.form.directive', 'game.directive', 'game.service', 'settings.directive', 'settings.service']).controller('MatchController', MatchController);
})();

(function() {
  var ErrorService, getMessage, message, messages, setMessage;
  ErrorService = function() {
    return {
      getMessage: getMessage,
      setMessage: setMessage
    };
  };
  message = "";
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
  getMessage = function() {
    return message;
  };
  setMessage = function(msgCode) {
    message = "";
    if (messages[msgCode]) {
      message = messages[msgCode].message;
    }
  };
  return angular.module("error.service", []).factory("ErrorService", ErrorService);
})();

(function() {
  var GameController;
  GameController = function(GameService, SettingsService) {
    var vm;
    vm = this;
    vm.team1 = GameService.team1;
    vm.team2 = GameService.team2;
    vm.settings = SettingsService.settings;
  };
  return angular.module("game.controller", ['game.service', 'team.directive', 'timer.directive']).controller("GameController", GameController);
})();

(function() {
  var GameDirective;
  GameDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      controller: "GameController",
      controllerAs: "gameCtrl",
      templateUrl: 'app/shared/game/gameView.html'
    };
    return directive;
  };
  return angular.module("game.directive", ['game.controller', 'timer.directive']).directive("game", GameDirective);
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
      name: "Dacia",
      player_txt: "7   SERGIU DONICĂ",
      reserve_txt: "6   MIHAI MUSTEA (C)",
      player_list: ["7   SERGIU DONICĂ", "9   ALEX POSTICA"],
      reserve_list: ["6   MIHAI MUSTEA (C)"],
      renderPlayer: function() {
        return team1.player_list = prepare(team1.player_txt);
      },
      renderReserve: function() {
        return team1.reserve_list = prepare(team1.reserve_txt);
      }
    };
    team2 = {
      name: "Zimbru",
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
  var PlayerController;
  PlayerController = function(PlayerService, player) {
    var vm;
    vm = this;
    vm.player = "13 moco TEST PLAYER";
    console.log(player);
    vm.preparePlayer = PlayerService.preparePlayer(vm.player);
  };
  PlayerController.$inject = ['PlayerService', '$mdDialog'];
  return angular.module("player.controller", ['wordFirstFilter', 'player.actions.controller', 'player.service']).controller("PlayerController", PlayerController);
})();

(function() {
  var PlayerDirective;
  PlayerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      bindToController: {
        player: "="
      },
      transclude: true,
      controller: "PlayerController",
      controllerAs: "playerCtrl",
      templateUrl: 'app/shared/player/playerView.html'
    };
    return directive;
  };
  return angular.module("player.directive", ['player.controller', 'ucfirstFilter']).directive("playerCard", PlayerDirective);
})();

(function() {
  'use strict';
  var PlayerService, preparePlayer;
  PlayerService = function() {
    return {
      preparePlayer: preparePlayer
    };
  };
  preparePlayer = function(data) {
    var parts;
    console.log(data);
    data = data.replace(/( +)/g, " ");
    parts = data.split(" ");
    return {
      number: parts[0],
      name: parts[1] + " " + parts[2]
    };
  };
  return angular.module("player.service", []).factory("PlayerService", PlayerService);
})();

(function() {
  var SettingsController;
  SettingsController = function(SettingsFactory, SettingsService) {
    var vm;
    vm = this;
    vm.matchType = SettingsFactory.getMatchType();
    SettingsFactory.setSettings();
    vm.settings = SettingsService.settings;
  };
  SettingsController.$inject = ['SettingsFactory', 'SettingsService'];
  return angular.module("settings.controller", ['settings.factory']).controller("SettingsController", SettingsController);
})();

(function() {
  var SettingsDirective;
  SettingsDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      controller: "SettingsController",
      controllerAs: "settingsCtrl",
      templateUrl: 'app/shared/settings/settingsView.html'
    };
    return directive;
  };
  return angular.module("settings.directive", ['settings.controller', 'settings.rezerve.directive', 'settings.offside.directive', 'settings.corner.directive', 'settings.departajari.directive', 'settings.repriza.directive', 'settings.pauza.directive', 'settings.timer.directive']).directive("settings", SettingsDirective);
})();

(function() {
  var SettingsFactory, checkMatchType, setMatchType, setSettings, type;
  SettingsFactory = function($http, $location, ErrorService, SettingsService, SportService) {
    return {
      getMatchType: function() {
        return type;
      },
      getSettings: function() {
        return SettingsService.settings;
      },
      setMatchType: function(type) {
        return setMatchType(type, ErrorService, SportService.getSelected());
      },
      setSettings: function() {
        return setSettings($http, SettingsService, $location);
      }
    };
  };
  type = null;
  setSettings = function($http, SettingsService, $location) {
    var success;
    if (type) {
      success = function(response) {
        SettingsService.settings = response.data;
      };
      $http({
        method: "GET",
        url: "json/" + type + ".json"
      }).then(success);
      return;
    }
  };
  setMatchType = function(matchType, ErrorService, sports) {
    matchType = "" + matchType;
    type = matchType;
  };
  checkMatchType = function(matchType, sports) {
    var exist, i, len, sport;
    matchType = matchType.toLowerCase();
    exist = false;
    for (i = 0, len = sports.length; i < len; i++) {
      sport = sports[i];
      if (matchType === sport.name) {
        exist = true;
        break;
      }
    }
    return exist;
  };
  SettingsFactory.$ingect = ['$http', '$location', 'ErrorService', 'SettingsService', 'SportService'];
  return angular.module("settings.factory", ['error.service', 'settings.service', 'sport.service']).factory("SettingsFactory", SettingsFactory);
})();

(function() {
  var SettingsService;
  SettingsService = function() {
    this.settings = {};
  };
  return angular.module("settings.service", []).service("SettingsService", SettingsService);
})();

(function() {
  var SportService, select, selected, setSports, sports;
  SportService = function($http) {
    return {
      getSelected: function() {
        return selected;
      },
      getSports: function() {
        return sports;
      },
      setSports: function() {
        return setSports($http);
      }
    };
  };
  sports = {};
  selected = [];
  setSports = function($http) {
    sports = null;
    $http({
      method: "GET",
      url: "json/sports.json"
    }).then(function(response) {
      sports = response.data.sports;
      selected = select();
    });
  };
  select = function() {
    var selectedSports;
    selectedSports = [];
    sports.map(function(sport) {
      if (sport['show']) {
        return selectedSports.push(sport);
      }
    });
    return selectedSports;
  };
  SportService.$inject = ["$http"];
  return angular.module("sport.service", []).factory("SportService", SportService);
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

(function() {
  var TeamDirective;
  TeamDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        team: "="
      },
      templateUrl: 'app/shared/team/teamView.html'
    };
    return directive;
  };
  return angular.module("team.directive", ['player.directive']).directive("teamList", TeamDirective);
})();

(function() {
  var Player, TeamService, getGoals, getName, getPlayersTxt, getSubstitutesTxt, goals, mark, name, parse, players_txt, setName, setPlayersTxt, setSubstitutesTxt, substitutes_txt;
  TeamService = function() {
    return {
      getName: getName,
      setName: function(name) {
        return setName(name);
      },
      getPlayers: function() {
        return parse(players_txt);
      },
      getSubstitutes: function() {
        return parse(substitutes_txt);
      },
      getPlayers_txt: getPlayersTxt,
      setPlayers_txt: function(text) {
        return setPlayersTxt(text);
      },
      getSubstitutes_txt: getSubstitutesTxt,
      setSubstitutes_txt: function(text) {
        return setSubstitutesTxt(text);
      },
      getGoals: getGoals,
      mark: mark,
      player: new Player()
    };
  };
  Player = (function() {
    function Player(player_str) {
      this.player_str = player_str;
    }

    return Player;

  })();
  name = "";
  goals = 0;
  players_txt = "";
  substitutes_txt = "";
  getName = function() {
    return name;
  };
  setName = function(newName) {
    return name = newName;
  };
  getGoals = function() {
    return goals;
  };
  mark = function() {
    goals++;
  };
  parse = function(str) {
    var allPlayers, i, len, list, obj, row;
    list = str.split("\n");
    allPlayers = [];
    for (i = 0, len = list.length; i < len; i++) {
      row = list[i];
      obj = {
        "all": row.trim().toUpperCase()
      };
      allPlayers.push(obj);
    }
    return allPlayers;
  };
  getPlayersTxt = function() {
    return players_txt;
  };
  setPlayersTxt = function(text) {
    return players_txt = text;
  };
  getSubstitutesTxt = function() {
    return substitutes_txt;
  };
  setSubstitutesTxt = function(text) {
    return substitutes_txt = text;
  };
  return angular.module("team.service", []).factory("TeamService", TeamService);
})();

(function() {
  var TimerController;
  TimerController = function(TimerService, SettingsService) {
    var vm;
    vm = this;
    vm.repriza = 1;
    vm.settings = SettingsService.settings;
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

(function() {
  var TimerDirective;
  TimerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      controller: "TimerController",
      controllerAs: "timerCtrl",
      templateUrl: 'app/shared/timer/timerView.html'
    };
    return directive;
  };
  return angular.module("timer.directive", ['timer.controller']).directive("timer", TimerDirective);
})();

(function() {
  var TimerService, add, addSeconds, calculateTime, getPlayMinutes, getTime, getTotalMinutes, isOn, modify, playMinutes, reset, start, startTime, stop, sub, time, timer, timerInterval, timerIsRunning, toMinutes, totalMinutes, totalSeconds;
  TimerService = function($interval, ErrorService) {
    return {
      add: function(minutes) {
        return add(minutes);
      },
      addSeconds: addSeconds,
      getPlayMinutes: getPlayMinutes,
      getTime: getTime,
      getTotalMinutes: getTotalMinutes,
      isOn: isOn,
      modify: modify,
      reset: function() {
        return reset($interval);
      },
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
  totalMinutes = 0;
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
  start = function($interval) {
    if (!timerIsRunning) {
      timerInterval = $interval(timer, 1000);
    }
    timerIsRunning = true;
  };
  stop = function($interval) {
    $interval.cancel(timerInterval);
    timerIsRunning = false;
  };
  reset = function($interval) {
    $interval.cancel(timerInterval);
    totalSeconds = 10;
    calculateTime();
  };
  modify = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    totalSeconds = seconds + startTime;
    calculateTime();
  };
  add = function(minutes) {
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
  return angular.module("timer.service", ['error.service', 'settings.service']).factory("TimerService", TimerService);
})();

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

(function() {
  var ToastService, showError;
  ToastService = function($mdToast) {
    return {
      showError: function() {
        return showError($mdToast);
      }
    };
  };
  showError = function($mdToast, $location) {
    var showToast;
    if (!showToast) {
      showToast = true;
      $mdToast.show({
        hideDelay: 3000,
        position: 'top right',
        controller: "ToastController",
        controllerAs: "toastCtrl",
        templateUrl: 'app/shared/error/toast/toastView.html'
      }).then(function() {
        showToast = false;
        if (redirect) {
          $location.url("/");
        }
      });
    }
  };
  ToastService.$inject = ["$mdToast", "$location"];
  return angular.module("error.toast.service", ['error.toast.controller']).factory("ToastService", ToastService);
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

(function() {
  var FormDirective;
  FormDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        team: "=",
        settings: "="
      },
      templateUrl: 'app/shared/team/form/formView.html'
    };
    return directive;
  };
  return angular.module("team.form.directive", []).directive("teamForm", FormDirective);
})();

(function() {
  var CornerDirective;
  CornerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        cornere: "="
      },
      templateUrl: 'app/shared/settings/components/corner/cornerView.html'
    };
    return directive;
  };
  return angular.module("settings.corner.directive", []).directive("settingsCorner", CornerDirective);
})();

(function() {
  var DepartajariDirective;
  DepartajariDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        departajari: "="
      },
      templateUrl: 'app/shared/settings/components/departajari/departajariView.html'
    };
    return directive;
  };
  return angular.module("settings.departajari.directive", []).directive("settingsDepartajari", DepartajariDirective);
})();

(function() {
  var OffsideDirective;
  OffsideDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        offside: "="
      },
      templateUrl: 'app/shared/settings/components/offside/offsideView.html'
    };
    return directive;
  };
  return angular.module("settings.offside.directive", []).directive("settingsOffside", OffsideDirective);
})();

(function() {
  var PauzaDirective;
  PauzaDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        pauza: "="
      },
      templateUrl: 'app/shared/settings/components/pauza/pauzaView.html'
    };
    return directive;
  };
  return angular.module("settings.pauza.directive", []).directive("settingsPauza", PauzaDirective);
})();

(function() {
  var ReprizaDirective;
  ReprizaDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        repriza: "="
      },
      templateUrl: 'app/shared/settings/components/repriza/reprizaView.html'
    };
    return directive;
  };
  return angular.module("settings.repriza.directive", []).directive("settingsRepriza", ReprizaDirective);
})();

(function() {
  var RezerveDirective;
  RezerveDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        rezerve: "="
      },
      templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
    };
    return directive;
  };
  return angular.module("settings.rezerve.directive", []).directive("settingsRezerve", RezerveDirective);
})();

(function() {
  var TimerDirective;
  TimerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        timer: "="
      },
      templateUrl: 'app/shared/settings/components/timer/timerView.html'
    };
    return directive;
  };
  return angular.module("settings.timer.directive", []).directive("settingsTimer", TimerDirective);
})();
