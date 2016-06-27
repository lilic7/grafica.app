(function() {
  var SettingsController;
  SettingsController = function($routeParams, SettingsService) {
    var vm;
    vm = this;
    vm.matchType = SettingsService.getMatchType();
    vm.settings = SettingsService.all;
  };
  SettingsController.$inject = ['$routeParams', 'SettingsService'];
  return angular.module("settings.controller", ['settings.service']).controller("SettingsController", SettingsController);
})();
