angular.module("settings.controller", ['settings.service']).controller("SettingsController", function(SettingsService) {
  var vm;
  vm = this;
  vm.settingsService = SettingsService;
});
