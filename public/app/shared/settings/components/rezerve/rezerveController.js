angular.module("settings.rezerve.controller", ['settings.service']).controller("RezerveController", function(SettingsService) {
  var vm;
  vm = this;
  vm.rezerve = SettingsService.all;
});
