angular.module "timer.controller", ['timer.service', 'settings.service']

.controller "TimerController", (TimerService, SettingsService)->
  vm = this

  vm.repriza = 1
  vm.settings = SettingsService.all
  vm.timerService = TimerService

  vm.setRepriza = (repriza)->
    TimerService.modify (repriza-1) * vm.settings.durata_repriza
    vm.repriza = repriza
    return
    

  return