(->
    CornerDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {cornere: "="}
            templateUrl: 'app/shared/settings/components/corner/cornerView.html'
        directive
    angular
        .module "settings.corner.directive",
        []
        .directive "settingsCorner", CornerDirective
)()