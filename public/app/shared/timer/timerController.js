angular.module("timer.controller", ['timer.service']).controller("TimerController", function(TimerService) {
  var vm;
  vm = this;
  vm.repriza = 1;
  vm.durataRepriza = 45;
  vm.timerService = TimerService;
  vm.reset = function() {
    vm.timerService.reset();
    vm.repriza = 1;
  };
  vm.setRepriza = function(repriza) {
    vm.timerService.changeTotalSeconds((repriza - 1) * vm.durataRepriza);
    vm.repriza = repriza;
  };
});
