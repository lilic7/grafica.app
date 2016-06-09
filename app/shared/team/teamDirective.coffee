angular.module "team.directive", ['team.controller']

.directive "team", ()->
  {
    restrict: "E",
    scope: {
      team: "="
    }
    templateUrl: "app/shared/team/teamView.html",
    controller: "TeamController",
    controllerAs: "teamCtrl"
  }