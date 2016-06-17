angular.module "settings.departajari.directive", []
.directive "settingsDepartajari", ()->
  {
    restrict: "E"
    scope: {
      departajari: "="
    }
    templateUrl: "app/shared/settings/components/departajari/departajariView.html"
  }