(function() {
  var SettingsService;
  SettingsService = function() {
    this.settings = {};
  };
  return angular.module("settings.service", []).service("SettingsService", SettingsService);
})();
