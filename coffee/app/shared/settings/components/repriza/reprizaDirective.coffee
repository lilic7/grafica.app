angular.module "settings.repriza.directive", []
.directive "settingsRepriza", ()->
  {
    restrict: "E"
    scope: {
      repriza: "="
    }
    templateUrl: "app/shared/settings/components/repriza/reprizaView.html"
  }