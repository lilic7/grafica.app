(->
  HomeController = (SettingsFactory)->
    vm = @
    vm.matches = SettingsFactory.getSports()

    return

  HomeController.$inject = ['SettingsFactory']

  angular
    .module "home.controller",
      ['settings.factory']
    .controller "HomeController", HomeController
)()