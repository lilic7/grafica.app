angular.module "settings.rezerve.directive", []

.directive "settingsRezerve", ()->
  {
    restrict: "E"
    scope: {
      rezerve: "="
    }
    templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
  }