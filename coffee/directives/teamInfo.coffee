angular.module "teamInfo", ['matchSettings']

.directive "teamInfo", ()->
  {
    restrict: "E",
    templateUrl: "../shared/teamInfoForm.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  }

.controller "TeamInfoController", (SettingsFactory)->
  vm = this
  vm.settings = SettingsFactory
  return