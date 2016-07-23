(function() {
  var TimerDirective;
  TimerDirective = function() {
    var directive;
    directive = {
      restrict: 'A',
      controller: "TimerController",
      controllerAs: "timerCtrl",
      template: 'app/shared/timer/timer.view.html'
    };
    return directive;
  };
  return angular.module("timer.directive", []).directive("timer", TimerDirective);
})();
