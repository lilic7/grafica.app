angular.module("timer.controller", ['timer.service']).controller("TimerController", function(TimerService) {
  var vm;
  vm = this;
  vm.timer = TimerService;
  vm.durataRepriza = 45;
  vm.sliderDisabled = true;
  vm.repriza = 1;
  vm.setRepriza = function(repriza) {
    vm.timer.changeTotalSeconds((repriza - 1) * vm.durataRepriza);
    vm.repriza = repriza;
  };
});
