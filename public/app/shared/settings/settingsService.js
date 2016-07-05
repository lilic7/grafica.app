(function() {
  var SettingsService;
  SettingsService = function(ErrorService) {
    var checkMatchType, setMatchSettings, setMatchType, sports, type;
    sports = ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'];
    type = null;
    this.all = {};
    this.getSports = function() {
      return sports;
    };
    this.getMatchType = function() {
      return type;
    };
    this.setMatchType = function(matchType) {
      return setMatchType(matchType);
    };
    this.setMatchSettings = function(settingsFromJson) {
      return setMatchSettings;
    };
    setMatchSettings = function(settings, settingsFromJson) {
      return settings.all = settingsFromJson;
    };
    setMatchType = function(matchType) {
      matchType = "" + matchType;
      if (checkMatchType(matchType) !== -1) {
        type = matchType;
      } else {
        type = "";
        ErrorService.setMessage("WRONG_MATCH_NAME");
      }
    };
    checkMatchType = function(matchType) {
      matchType = matchType.toLowerCase();
      return sports.indexOf(matchType);
    };
  };
  SettingsService.$inject = ['ErrorService'];
  return angular.module("settings.service", ['error.service']).service("SettingsService", SettingsService);
})();
