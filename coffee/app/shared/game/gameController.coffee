(->
    class GameController
        $inject: ["GameService"]

        constructor: (GameService, SettingsService)->
            @team1 = GameService.team1
            @team2 = GameService.team2
            @settings = SettingsService.settings
        
    angular
        .module "game.controller",
        [
            'game.service'
            'team.directive'
            'timer.directive'
            'settings.service'
        ]
        .controller "GameController", GameController
)()