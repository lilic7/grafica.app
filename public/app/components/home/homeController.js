(function() {
  var HomeController;
  HomeController = function(SettingsService) {
    var vm;
    vm = this;
    vm.matches = SettingsService.getSports();
  };
  HomeController.$inject = ['SettingsService'];
  return angular.module("home.controller", ['settings.service']).controller("HomeController", HomeController);
})();
