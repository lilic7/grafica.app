angular.module "settings.rezerve.directive", []

.directive "rezerve", ()->
  {
    restrict: "E"
    scope: {
      rezerve: "="
    }
    templateUrl: 'app/shared/settings/components/rezerve/rezerveView.html'
  }