angular.module("team.directive", ['team.controller']).directive("team", function() {
  return {
    restrict: "E",
    scope: {
      team: "="
    },
    templateUrl: "app/shared/team/teamView.html",
    controller: "TeamController",
    controllerAs: "teamCtrl"
  };
});
