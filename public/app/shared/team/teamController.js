(function() {
  var TeamController;
  TeamController = (function() {
    function TeamController() {}

    TeamController.$inject = ['TeamService'];

    TeamController.team = {};

    TeamController.player_list = [];

    TeamController.substitutes_list = [];

    TeamController.prototype.setTeam = function(team) {
      this.team = team;
      return this;
    };

    TeamController.prototype.render = function() {
      this.player_list = this.team.player_list.split("\n");
      this.substitutes_list = this.team.substitutes_list.split("\n");
    };

    return TeamController;

  })();
  return angular.module("team.controller", ['team.service']).controller("TeamController", TeamController);
})();
