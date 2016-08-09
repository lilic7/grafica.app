(function() {
  var TimerController;
  TimerController = function(TimerService, SettingsService) {
    var vm;
    vm = this;
    vm.repriza = 1;
    vm.settings = SettingsService.settings;
    vm.timerService = TimerService;
    vm.setRepriza = function(repriza) {
      var minutes;
      minutes = (repriza - 1) * vm.settings.repriza;
      TimerService.modify(minutes);
      vm.repriza = repriza;
    };
  };
  TimerController.$inject = ['TimerService', 'SettingsService'];
  return angular.module("timer.controller", ['timer.service', 'settings.service']).controller("TimerController", TimerController);
})();
