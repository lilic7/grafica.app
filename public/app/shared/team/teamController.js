angular.module("team.controller", []).controller("TeamController", function() {
  var vm;
  vm = this;
  vm.team = {};
  vm.setTeam = function(team) {
    return vm.team = team;
  };
  vm.render = function() {
    vm.player_list = vm.team.player_list.split("\n");
    vm.reserve_list = vm.team.reserve_list.split("\n");
  };
});
