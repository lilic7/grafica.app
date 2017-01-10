(function() {
  var TimerDirective;
  TimerDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      controller: "TimerController",
      controllerAs: "timerCtrl",
      templateUrl: 'app/shared/timer/timerView.html'
    };
    return directive;
  };
  return angular.module("timer.directive", ['timer.controller']).directive("timer", TimerDirective);
})();
