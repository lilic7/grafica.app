(->
    TimerDirective = ()->
        # directive declaration
        directive =
            restrict: 'E'
            scope: {timer: "="}
            templateUrl: 'app/shared/settings/components/timer/timerView.html'
        directive
    angular
        .module "settings.timer.directive",
        []
        .directive "settingsTimer", TimerDirective
)()