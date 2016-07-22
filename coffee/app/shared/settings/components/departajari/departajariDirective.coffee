(->
    DepartajariDirective = ->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {departajari: "="}
            templateUrl: 'app/shared/settings/components/departajari/departajariView.html'
        directive
    angular
        .module "settings.departajari.directive",
        []
        .directive "settingsDepartajari", DepartajariDirective
)()