(->
    TeamDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {team: "="}
            templateUrl: 'app/shared/team/teamView.html'
        directive
    angular
        .module "team.directive",
        [
            'player.directive'
        ]
        .directive "teamList", TeamDirective
)()