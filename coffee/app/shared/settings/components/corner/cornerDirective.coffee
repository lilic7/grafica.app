angular.module "settings.corner.directive", []
.directive "settingsCorner", ()->
  {
    restrict: "E"
    scope: {
      cornere: "="
    }
    templateUrl: "app/shared/settings/components/corner/cornerView.html"
  }