angular.module "settings.offside.directive", []
.directive "settingsOffside", ()->
  {
    restrict: "E"
    scope: {
      offside: "="
    }
    templateUrl: "app/shared/settings/components/offside/offsideView.html"
  }