angular.module("match.controller", ['teamInfo.directive', 'settings.directive', 'game.directive']).controller('MatchController', function($routeParams) {
  var vm;
  vm = this;
  vm.matchType = $routeParams.matchType;
  vm.team1 = {
    name: "The team 1"
  };
  vm.team2 = {
    name: "The team 2"
  };
});
