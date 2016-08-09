(->
    FormDirective = ->
        # directive declaration
        directive =
            restrict: 'E'
            scope:
              team: "="
              settings: "="
            templateUrl: 'app/shared/form/formView.html'
        directive
    angular
        .module "team.form.directive", []
        .directive "teamForm", FormDirective
)()