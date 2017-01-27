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
  SettingsFactory.$inject = ['$http', '$location', 'ErrorService', 'SettingsService', 'SportService'];
  return angular.module("settings.factory", ['error.service', 'settings.service', 'sport.service']).factory("SettingsFactory", SettingsFactory);
})();
