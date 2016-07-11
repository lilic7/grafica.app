(->
  SettingsService = ()->

    @.sports = {}
    @.settings = {}

    return

  angular
    .module "settings.service", []
    .service "SettingsService", SettingsService
)()