angular.module("settings.controller", ['settings.service']).controller("SettingsController", function($routeParams, SettingsService) {
  var vm;
  vm = this;
  vm.matchType = SettingsService.getMatchType();
  vm.settings = SettingsService.all;
  vm.rezerve = {
    on: SettingsService.all.rezerve
  };
});
