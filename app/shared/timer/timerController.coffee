angular.module "timer.controller", ['timer.service']

.controller "TimerController", (TimerService)->
  vm = this

  vm.repriza = 1
  vm.durataRepriza = 45
  vm.timerService = TimerService


  vm.reset = ()->
    vm.timerService.reset()
    vm.repriza = 1
    return

  vm.setRepriza = (repriza)->
    vm.timerService.changeTotalSeconds (repriza-1) * vm.durataRepriza
    vm.repriza = repriza
    return

  return