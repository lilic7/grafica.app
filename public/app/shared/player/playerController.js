angular.module("player.controller", ['wordFirstFilter', 'player.actions.controller']).controller("PlayerController", function($mdDialog) {
  var vm;
  vm = this;
  vm.status = "";
  vm.player = {};
  vm.preparePlayer = function(data) {
    var parts;
    data = data.replace(/( +)/g, " ");
    parts = data.split(" ");
    return vm.player = {
      number: parts[0],
      name: parts[1] + " " + parts[2]
    };
  };
  vm.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: 'PlayerActionsController',
      controllerAs: 'actionsCtrl',
      templateUrl: 'app/shared/player/actions/actionsView.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    }).then(function(answer) {
      return vm.status = 'You said the information was "' + answer + '".';
    }, function() {
      return vm.status = 'You cancelled the dialog.';
    });
  };
});
