(->
    ReprizaDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {repriza: "="}
            templateUrl: 'app/shared/settings/components/repriza/reprizaView.html'
        directive
    angular
        .module "settings.repriza.directive",
        []
        .directive "settingsRepriza", ReprizaDirective
)()