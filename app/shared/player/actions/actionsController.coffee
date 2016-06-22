angular.module "player.actions.controller", []

.controller "PlayerActionsController", ($mdDialog)->
  vm = @

  vm.hide = ->
    $mdDialog.hide()
    return

  vm.cancel = ->
    $mdDialog.cancel()
    return

  vm.answer = (answer)->
    $mdDialog.hide answer
    return

  return