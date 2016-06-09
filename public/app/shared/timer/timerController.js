angular.module("timer.controller", ['timer.service']).controller("TimerController", function(TimerService) {
  var vm;
  vm = this;
  vm.repriza = 1;
  vm.durataRepriza = 45;
  vm.timerService = TimerService;
  vm.setRepriza = function(repriza) {
    TimerService.modify((repriza - 1) * vm.durataRepriza);
    vm.repriza = repriza;
  };
});
