(function() {
  var RezerveDirective;
  RezerveDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        rezerve: "="
      },
      templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
    };
    return directive;
  };
  return angular.module("settings.rezerve.directive", []).directive("settingsRezerve", RezerveDirective);
})();
