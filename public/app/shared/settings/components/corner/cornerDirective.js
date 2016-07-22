(function() {
  var CornerDirective;
  CornerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        cornere: "="
      },
      templateUrl: 'app/shared/settings/components/corner/cornerView.html'
    };
    return directive;
  };
  return angular.module("settings.corner.directive", []).directive("settingsCorner", CornerDirective);
})();
