(function() {
  var HomeController;
  HomeController = function(SettingsService) {
    var vm;
    vm = this;
    vm.matches = SettingsService.sports;
  };
  return angular.module("home.controller", ['settings.service']).controller("HomeController", HomeController);
})();
