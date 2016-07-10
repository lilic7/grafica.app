(function() {
  var SettingsFactory, checkMatchType, setMatchType, setSettings, setSports, sports, type;
  SettingsFactory = function($http, ErrorService, SettingsService) {
    return {
      getMatchType: function() {
        return type;
      },
      getSettings: function() {
        return SettingsService.settings;
      },
      getSports: function() {
        return sports;
      },
      setMatchType: function(type) {
        return setMatchType(type, ErrorService);
      },
      setSettings: function() {
        return setSettings($http, SettingsService);
      },
      setSports: function() {
        return setSports($http);
      }
    };
  };
  type = null;
  sports = {};
  setSettings = function($http, SettingsService) {
    var success;
    if (type) {
      success = function(response) {
        SettingsService.settings = response.data;
      };
      $http({
        method: "GET",
        url: "json/" + type + ".json"
      }).then(success);
    } else {
      SettingsService.settings = {};
    }
  };
  setSports = function($http) {
    var success;
    success = function(response) {
      sports = response.data;
    };
    $http({
      method: "GET",
      url: "json/sports.json"
    }).then(success);
  };
  setMatchType = function(matchType, errorService) {
    matchType = "" + matchType;
    if (checkMatchType(matchType)) {
      type = matchType;
    } else {
      type = null;
      errorService.setMessage("WRONG_MATCH_NAME");
    }
  };
  checkMatchType = function(type) {
    var exist, i, len, sport, sportsNames;
    type = type.toLowerCase();
    exist = false;
    sportsNames = sports['sports'];
    for (i = 0, len = sportsNames.length; i < len; i++) {
      sport = sportsNames[i];
      if (type === sport.name) {
        exist = true;
        break;
      }
    }
    return exist;
  };
  SettingsFactory.$ingect = ['$http', 'ErrorService', 'SettingsService'];
  return angular.module("settings.factory", ['error.service', 'settings.service']).factory("SettingsFactory", SettingsFactory);
})();
