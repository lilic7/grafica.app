(->
    SettingsDirective = ->
        # directive declaration
        directive =
            restrict: 'E'
            controller: "SettingsController"
            controllerAs: "settingsCtrl"
            templateUrl: 'app/shared/settings/settingsView.html'
        directive
    angular
        .module "settings.directive",
        [
          'settings.controller'
          'settings.rezerve.directive'
          'settings.offside.directive'
          'settings.corner.directive'
          'settings.departajari.directive'
          'settings.repriza.directive'
          'settings.pauza.directive'
          'settings.timer.directive'
        ]
        .directive "settings", SettingsDirective
)()