(->
    RezerveDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {rezerve: "="}
            templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
        directive
    angular
        .module "settings.rezerve.directive",
        []
        .directive "settingsRezerve", RezerveDirective
)()