(function() {
  var SettingsService;
  SettingsService = function() {
    this.sports = {};
    this.settings = {};
  };
  return angular.module("settings.service", []).service("SettingsService", SettingsService);
})();
