(function() {
  var TeamDirective;
  TeamDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        team: "="
      },
      templateUrl: 'app/shared/team/teamView.html'
    };
    return directive;
  };
  return angular.module("team.directive", ['player.directive']).directive("teamList", TeamDirective);
})();
