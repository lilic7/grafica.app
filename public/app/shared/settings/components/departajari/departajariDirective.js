angular.module("settings.departajari.directive", []).directive("settingsDepartajari", function() {
  return {
    restrict: "E",
    scope: {
      departajari: "="
    },
    templateUrl: "app/shared/settings/components/departajari/departajariView.html"
  };
});
