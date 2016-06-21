angular.module("player.actions.controller", []).controller("PlayerActionsController", function($mdDialog) {
  var vm;
  vm = this;
  vm.hide = function() {
    return $mdDialog.hide();
  };
  vm.cancel = function() {
    return $mdDialog.cancel();
  };
  return vm.answer = function(answer) {
    return $mdDialog.hide(answer);
  };
});
