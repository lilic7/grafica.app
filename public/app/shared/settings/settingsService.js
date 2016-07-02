(function() {
  var SettingsService, checkMatchType, getMatchType, getSports, setMatchSettings, setMatchType;
  SettingsService = function($http, ErrorService) {
    var sports;
    ({
      all: {},
      getJsonSettings: getJsonSettings,
      getSports: getSports,
      getMatchType: getMatchType,
      setMatchType: setMatchType,
      setMatchSettings: function(settingsFromJson) {
        return setMatchSettings;
      }
    });
    return sports = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
  };
  getSports = function() {
    return sports;
  };
  getMatchType = function() {
    return type;
  };
  setMatchSettings = function(settings, settingsFromJson) {
    return settings.all = settingsFromJson;
  };
  setMatchType = function(matchType) {
    var type;
    if (checkMatchType(matchType) !== -1) {
      type = matchType;
    } else {
      ErrorService.setMessage("WRONG_MATCH_NAME");
    }
  };
  return checkMatchType = function(matchType) {
    matchType = matchType.toLowerCase();
    sports.indexOf(matchType);
    SettingsService.$inject = ['$http', 'ErrorService'];
    return angular.module("settings.service", ['error.service']).factory("SettingsService", SettingsService);
  };
})();
