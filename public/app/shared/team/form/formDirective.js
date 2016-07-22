(function() {
  var FormDirective;
  FormDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        team: "=",
        settings: "="
      },
      templateUrl: 'app/shared/form/formView.html'
    };
    return directive;
  };
  return angular.module("form.directive", []).directive("form", FormDirective);
})();
