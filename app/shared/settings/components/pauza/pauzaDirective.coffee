angular.module "settings.pauza.directive", []
.directive "settingsPauza", ()->
  {
    restrict: "E"
    scope: {
      pauza: "="
    }
    templateUrl: "app/shared/settings/components/pauza/pauzaView.html"
  }