angular.module("settings.service", ['error.service']).factory("SettingsService", function($http, ErrorService) {
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
});
