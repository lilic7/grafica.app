(->
  HomeController = (SettingsService)->
    vm = @
    vm.matches = SettingsService.sports

    return

  angular
  .module "home.controller",
    ['settings.service']
  .controller "HomeController", HomeController
)()