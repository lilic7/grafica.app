angular.module "player.actions.controller", []

.controller "PlayerActionsController", ($mdDialog)->
  vm = this

  vm.hide = ()->
    $mdDialog.hide()

  vm.cancel = ()->
    $mdDialog.cancel()

  vm.answer = (answer)->
    $mdDialog.hide answer