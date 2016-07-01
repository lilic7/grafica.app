(->
  SettingsController = ($routeParams, SettingsService)->
    vm = @
    vm.matchType = SettingsService.getMatchType()
    vm.settings = SettingsService.all
    return

  SettingsController.$inject = ['$routeParams', 'SettingsService']
  
  angular
    .module "settings.controller",
    [
      'settings.service'
    ]
    .controller "SettingsController", SettingsController
)()