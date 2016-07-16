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

(->
    SettingsController = ()->        
        
        return
    SettingsController.$inject = []
    angular
        .module "settings.service", []
        .service "SettingsController", SettingsController
)()