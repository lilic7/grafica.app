(function() {
  var TimerDirective;
  TimerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        timer: "="
      },
      templateUrl: 'app/shared/settings/components/timer/timerView.html'
    };
    return directive;
  };
  return angular.module("settings.timer.directive", []).directive("settingsTimer", TimerDirective);
})();
