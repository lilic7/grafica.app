angular.module("match.controller", ['team.directive', 'game.directive', 'settings.directive']).controller('MatchController', function() {
  var vm;
  vm = this;
  vm.team1 = {
    name: "Stanga"
  };
  vm.team2 = {
    name: "Dreapta"
  };
});
