(function() {
  var PauzaDirective;
  PauzaDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        pauza: "="
      },
      templateUrl: 'app/shared/settings/components/pauza/pauzaView.html'
    };
    return directive;
  };
  return angular.module("settings.pauza.directive", []).directive("settingsPauza", PauzaDirective);
})();
