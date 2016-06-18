angular.module("team.form.directive", []).directive("teamForm", function() {
  return {
    restrict: "E",
    scope: {
      team: "=",
      settings: "="
    },
    templateUrl: "app/shared/team/form/formView.html"
  };
});
