angular.module("home.controller", ['settings.service']).controller("HomeController", function(SettingsService) {
  var vm;
  vm = this;
  vm.matches = SettingsService.sports;
});
