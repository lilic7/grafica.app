angular.module("player.actions.controller", []).controller("PlayerActionsController", function($mdDialog) {
  var vm;
  vm = this;
  vm.hide = function() {
    $mdDialog.hide();
  };
  vm.cancel = function() {
    $mdDialog.cancel();
  };
  vm.answer = function(answer) {
    $mdDialog.hide(answer);
  };
});
