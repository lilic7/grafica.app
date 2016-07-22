(->
    PauzaDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {pauza: "="}
            templateUrl: 'app/shared/settings/components/pauza/pauzaView.html'
        directive
    angular
        .module "settings.pauza.directive",
        []
        .directive "settingsPauza", PauzaDirective
)()