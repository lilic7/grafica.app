(->
  HomeController = (SettingsService)->
    vm = @
    vm.matches = SettingsService.getSports()

    return

  HomeController.$inject = ['SettingsService']

  angular
    .module "home.controller",
      ['settings.service']
    .controller "HomeController", HomeController
)()