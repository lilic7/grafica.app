(function() {
  var DepartajariDirective;
  DepartajariDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        departajari: "="
      },
      templateUrl: 'app/shared/settings/components/departajari/departajariView.html'
    };
    return directive;
  };
  return angular.module("settings.departajari.directive", []).directive("settingsDepartajari", DepartajariDirective);
})();
