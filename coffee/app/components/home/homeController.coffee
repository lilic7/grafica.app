(->
  HomeController = (SettingsService)->
    vm = @
    vm.matches = SettingsService.sports

    return

  HomeController.$inject = ['SettingsService']

  angular
    .module "home.controller",
      ['settings.service']
    .controller "HomeController", HomeController
)()