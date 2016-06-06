angular.module "teamInfo.directive", ['teamInfo.controller']

.directive "teamInfo", ()->
  {
    restrict: "E",
    scope: {
      team: "="
    }
    templateUrl: "app/shared/teamInfo/teamInfoView.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  }