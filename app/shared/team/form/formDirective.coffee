angular.module "team.form.directive", []

.directive "teamForm", ()->
  {
    restrict: "E"
    scope: {
      team: "="
      settings: "="
    }
    templateUrl: "app/shared/team/form/formView.html"
  }