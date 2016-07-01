angular.module "team.directive",
  [
    'player.directive'
  ]

.directive "teamList", ()->
  {
    restrict: "E"
    scope: {
      team: "="
    }
    templateUrl: "app/shared/team/teamView.html"
  }