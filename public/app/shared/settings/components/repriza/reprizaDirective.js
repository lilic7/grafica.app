(function() {
  var ReprizaDirective;
  ReprizaDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        repriza: "="
      },
      templateUrl: 'app/shared/settings/components/repriza/reprizaView.html'
    };
    return directive;
  };
  return angular.module("settings.repriza.directive", []).directive("settingsRepriza", ReprizaDirective);
})();
