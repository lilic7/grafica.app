(->
    OffsideDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {offside: "="}
            templateUrl: 'app/shared/settings/components/offside/offsideView.html'
        directive
    angular
        .module "settings.offside.directive",
        []
        .directive "settingsOffside", OffsideDirective
)()