(function() {
  var SettingsFactory, checkMatchType, setMatchType, setSettings, setSports, type;
  SettingsFactory = function($http, ErrorService, SettingsService) {
    return {
      getMatchType: function() {
        return type;
      },
      getSettings: function() {
        return SettingsService.settings;
      },
      getSports: function() {
        return SettingsService.sports;
      },
      setMatchType: function(type) {
        return setMatchType(type, ErrorService, SettingsService.sports);
      },
      setSettings: function() {
        return setSettings($http, SettingsService);
      },
      setSports: function() {
        return setSports($http, SettingsService);
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
  setSports = function($http, SettingsService) {
    var success;
    success = function(response) {
      SettingsService.sports = response.data;
    };
    $http({
      method: "GET",
      url: "json/sports.json"
    }).then(success);
  };
  setMatchType = function(matchType, ErrorService, sports) {
    matchType = "" + matchType;
    if (checkMatchType(matchType, sports)) {
      type = matchType;
    } else {
      type = null;
      ErrorService.setMessage("WRONG_MATCH_NAME");
    }
    return sports;
  };
  checkMatchType = function(matchType, sports) {
    var exist, i, len, ref, sport;
    matchType = matchType.toLowerCase();
    exist = false;
    ref = sports.sports;
    for (i = 0, len = ref.length; i < len; i++) {
      sport = ref[i];
      if (matchType === sport.name) {
        exist = true;
        break;
      }
    }
    return exist;
  };
  SettingsFactory.$ingect = ['$http', 'ErrorService', 'SettingsService'];
  return angular.module("settings.factory", ['error.service', 'settings.service']).factory("SettingsFactory", SettingsFactory);
})();
