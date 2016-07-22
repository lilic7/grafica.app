(->
    FormDirective = ->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {
              team: "="
              settings: "="
            }
            templateUrl: 'app/shared/form/formView.html'
        directive
    angular
        .module "form.directive",
        []
        .directive "form", FormDirective
)()