angular.module("settings.service", ['error.service']).factory("SettingsService", function(ErrorService) {
  var all, checkMatchType, settings;
  settings = {};
  all = {
    matches: ['minifotbal', 'fotbal', 'futsal', 'handbal', 'baschet', 'volei', 'tenis'],
    match: '',
    minifotbal: {
      team: "Best Team",
      rezerve: false,
      offside: false,
      corner: false,
      repriza: 25
    },
    fotbal: {
      rezerve: true,
      offside: false,
      corner: false,
      repriza: 45
    }
  };
  settings.getMatch = function() {
    return all.match;
  };
  settings.matchSettings = function() {
    return all[all.match];
  };
  settings.setCurrent = function(matchType) {
    if (checkMatchType(matchType) !== -1) {
      all.match = matchType;
    } else {
      ErrorService.setMessage("WRONG_MATCH_NAME");
    }
  };
  checkMatchType = function(matchType) {
    matchType = matchType.toLowerCase();
    return all.matches.indexOf(matchType);
  };
  return settings;
});
