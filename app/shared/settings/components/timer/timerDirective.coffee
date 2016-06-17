angular.module "settings.timer.directive", []
.directive "settingsTimer", ()->
  {
    restrict: "E"
    scope: {
      timer: "="
    }
    templateUrl: "app/shared/settings/components/timer/timerView.html"
  }