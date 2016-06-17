angular.module("settings.pauza.directive", []).directive("settingsPauza", function() {
  return {
    restrict: "E",
    scope: {
      pauza: "="
    },
    templateUrl: "app/shared/settings/components/pauza/pauzaView.html"
  };
});
