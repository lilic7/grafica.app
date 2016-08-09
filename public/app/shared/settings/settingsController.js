(function() {
  var SettingsController;
  SettingsController = function(SettingsFactory, SettingsService) {
    var vm;
    vm = this;
    vm.matchType = SettingsFactory.getMatchType();
    SettingsFactory.setSettings();
    vm.settings = SettingsService.settings;
  };
  SettingsController.$inject = ['SettingsFactory', 'SettingsService'];
  return angular.module("settings.controller", ['settings.factory']).controller("SettingsController", SettingsController);
})();

(function() {
  var SettingsController;
  SettingsController = function() {};
  SettingsController.$inject = [];
  return angular.module("settings.controller", []).service("SettingsController", SettingsController);
})();
