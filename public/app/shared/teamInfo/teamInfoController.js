angular.module("teamInfo.controller", ['settings.service']).controller("TeamInfoController", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
});
