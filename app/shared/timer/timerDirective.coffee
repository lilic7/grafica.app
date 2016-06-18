angular.module "timer.directive",
  [
    'timer.controller'
  ]

.directive "timer", ()->
  {
    restrict: 'E'
    templateUrl: 'app/shared/timer/timerView.html'
    controller: "TimerController"
    controllerAs: "timerCtrl"
  }