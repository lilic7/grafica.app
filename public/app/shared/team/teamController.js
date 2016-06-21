(function() {
  var TeamController;
  TeamController = function() {
    var render, setTeam, vm;
    vm = this;
    vm.team = {};
    vm.setTeam = setTeam;
    vm.render = render;
    setTeam = function(team) {
      return vm.team = team;
    };
    render = function() {
      vm.player_list = vm.team.player_list.split("\n");
      vm.reserve_list = vm.team.reserve_list.split("\n");
    };
  };
  return angular.module("team.controller", []).controller("TeamController", TeamController);
})();
