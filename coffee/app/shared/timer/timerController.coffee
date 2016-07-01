(->
  TimerController = (TimerService, SettingsService)->
    vm = @

    vm.repriza = 1
    vm.settings = SettingsService.all
    vm.timerService = TimerService

    vm.setRepriza = (repriza)->
      minutes = (repriza-1) * vm.settings.repriza
      TimerService.modify minutes
      vm.repriza = repriza
      return

    return

  TimerController.$inject = ['TimerService', 'SettingsService']
  angular
    .module "timer.controller",
    [
      'timer.service'
      'settings.service'
    ]
    .controller "TimerController", TimerController
)()