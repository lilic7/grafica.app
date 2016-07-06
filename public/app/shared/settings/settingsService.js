(function() {
  var SettingsService;
  SettingsService = function($http, ErrorService) {
    var checkMatchType, getMatchSettings, setMatchType, sports, type;
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
    this.getMatchSettings = function() {
      return getMatchSettings;
    };
    getMatchSettings = function() {
      if (type) {
        return $http.get('json/' + type + ".json").then(function(result) {
          this.all = result;
        });
      }
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
  SettingsService.$inject = ['$http', 'ErrorService'];
  return angular.module("settings.service", ['error.service']).service("SettingsService", SettingsService);
})();
