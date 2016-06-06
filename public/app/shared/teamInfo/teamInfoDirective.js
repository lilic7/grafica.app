angular.module("teamInfo.directive", ['teamInfo.controller']).directive("teamInfo", function() {
  return {
    restrict: "E",
    scope: {
      team: "="
    },
    templateUrl: "app/shared/teamInfo/teamInfoView.html",
    controller: "TeamInfoController",
    controllerAs: "teamInfoCtrl"
  };
});
