(->
  TimerDirective = ()->
    # directive declaration
    directive = 
      restrict: 'E'
      controller: "TimerController"
      controllerAs: "timerCtrl"
      template: 'app/shared/timer/timerView.html'
    directive
  
  angular
    .module "timer.directive",
    [
      'timer.controller'
    ]
    .directive "timer", TimerDirective
)()