(->
  TimerDirective = ()->
    # directive declaration
    directive = 
      restrict: 'A'
      controller: "TimerController"
      controllerAs: "timerCtrl"
      template: 'app/shared/timer/timer.view.html'
    directive
  
  angular
    .module "timer.directive", []
    .directive "timer", TimerDirective
)()