angular.module("settings.rezerve.directive", []).directive("rezerve", function() {
  return {
    restrict: "E",
    scope: {
      rezerve: "="
    },
    templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
  };
});
