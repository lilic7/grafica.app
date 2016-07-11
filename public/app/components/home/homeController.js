(function() {
  var HomeController;
  HomeController = function(SettingsFactory) {
    var vm;
    vm = this;
    vm.matches = SettingsFactory.getSports();
  };
  HomeController.$inject = ['SettingsFactory'];
  return angular.module("home.controller", ['settings.factory']).controller("HomeController", HomeController);
})();
