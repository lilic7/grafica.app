angular.module("settings.controller", ['settings.service']).controller("SettingsController", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
});
