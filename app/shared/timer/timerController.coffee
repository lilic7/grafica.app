angular.module "timer.controller", ['timer.service']

.controller "TimerController", (TimerService)->
  vm = this

  vm.repriza = 1
  vm.durataRepriza = 45
  vm.timerService = TimerService

  vm.setRepriza = (repriza)->
    TimerService.modify (repriza-1) * vm.durataRepriza
    vm.repriza = repriza
    return
    

  return