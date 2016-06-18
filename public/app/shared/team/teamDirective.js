angular.module("team.directive", ['player.directive']).directive("teamList", function() {
  return {
    restrict: "E",
    scope: {
      team: "="
    },
    templateUrl: "app/shared/team/teamView.html"
  };
});
