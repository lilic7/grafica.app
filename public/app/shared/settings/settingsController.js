angular.module("settings.controller", ['settings.service']).controller("SettingsController", function($routeParams, SettingsService) {
  var vm;
  vm = this;
  vm.matchType = $routeParams.matchType;
  vm.settingsService = SettingsService;
  SettingsService.setCurrent(vm.matchType);
  vm.showSection = function() {
    return vm.match = SettingsService.matchSettings();
  };
});
