(function() {
  var SettingsFactory, checkMatchType, setMatchType, setSettings, type;
  SettingsFactory = function($http, ErrorService, SettingsService, SportService) {
    return {
      getMatchType: function() {
        return type;
      },
      getSettings: function() {
        return SettingsService.settings;
      },
      setMatchType: function(type) {
        return setMatchType(type, ErrorService, SettingsService.sports);
      },
      setSettings: function() {
        return setSettings($http, SettingsService);
      }
    };
  };
  type = null;
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
  setMatchType = function(matchType, ErrorService, sports) {
    matchType = "" + matchType;
    if (checkMatchType(matchType, sports)) {
      type = matchType;
    } else {
      type = null;
      ErrorService.setMessage("WRONG_MATCH_NAME");
    }
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
  SettingsFactory.$ingect = ['$http', 'ErrorService', 'SettingsService', 'SportService'];
  return angular.module("settings.factory", ['error.service', 'settings.service', 'sport.service']).factory("SettingsFactory", SettingsFactory);
})();
