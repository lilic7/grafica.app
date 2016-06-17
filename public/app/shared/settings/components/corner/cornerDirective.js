angular.module("settings.corner.directive", []).directive("settingsCorner", function() {
  return {
    restrict: "E",
    scope: {
      cornere: "="
    },
    templateUrl: "app/shared/settings/components/corner/cornerView.html"
  };
});
