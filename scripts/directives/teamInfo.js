angular.module("teamInfo", ['matchSettings']).directive("teamInfo", function() {
  return {
    restrict: "E",
    templateUrl: "../shared/teamInfoForm.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  };
}).controller("TeamInfoController", function(SettingsFactory) {
  var vm;
  vm = this;
  vm.settings = SettingsFactory;
});
