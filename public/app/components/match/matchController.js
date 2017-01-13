(function() {
  var MatchController;
  MatchController = function(GameService, SettingsService) {
    var vm;
    vm = this;
    vm.team1 = GameService.team1;
    vm.team2 = GameService.team2;
    vm.settings = SettingsService.settings;
  };
  return angular.module("match.controller", ['team.form.directive', 'game.directive', 'game.service', 'settings.directive', 'settings.service']).controller('MatchController', MatchController);
})();
