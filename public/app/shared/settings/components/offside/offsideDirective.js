(function() {
  var OffsideDirective;
  OffsideDirective = function() {
    var directive;
    directive = {
      restrict: 'E',
      scope: {
        offside: "="
      },
      templateUrl: 'app/shared/settings/components/offside/offsideView.html'
    };
    return directive;
  };
  return angular.module("settings.offside.directive", []).directive("settingsOffside", OffsideDirective);
})();
