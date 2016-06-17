angular.module("settings.timer.directive", []).directive("settingsTimer", function() {
  return {
    restrict: "E",
    scope: {
      timer: "="
    },
    templateUrl: "app/shared/settings/components/timer/timerView.html"
  };
});
