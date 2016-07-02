(function() {
  var SettingsService, checkMatchType, getMatchType, getSports, setMatchSettings, setMatchType, sports, type;
  SettingsService = function(ErrorService) {
    return {
      all: {},
      getSports: getSports,
      getMatchType: getMatchType,
      setMatchType: setMatchType,
      setMatchSettings: function(settingsFromJson) {
        return setMatchSettings;
      }
    };
  };
  sports = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
  type = null;
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
  SettingsService.$inject = ['$http', 'ErrorService'];
  return angular.module("settings.service", ['error.service']).factory("SettingsService", SettingsService);
})();
