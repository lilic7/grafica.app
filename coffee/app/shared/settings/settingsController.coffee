(->
  SettingsController = (SettingsFactory, SettingsService)->
    vm = @
    vm.matchType = SettingsFactory.getMatchType()
    SettingsFactory.setSettings()
    vm.settings = SettingsService.settings

    return

  SettingsController.$inject = ['SettingsFactory', 'SettingsService']
  
  angular
    .module "settings.controller",
    [
      'settings.factory'
    ]
    .controller "SettingsController", SettingsController
)()