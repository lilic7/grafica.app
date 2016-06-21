angular.module "player.controller",
  [
    'wordFirstFilter',
    'player.actions.controller'
  ]
.controller "PlayerController", ($mdDialog)->
  vm = this
  vm.status = ""
  vm.player = {}

  vm.preparePlayer = (data)->
    data = data.replace /( +)/g, " "
    parts = data.split " "
    vm.player = {
      number: parts[0]
      name: parts[1] + " " + parts[2]
    }

  vm.showAdvanced = (ev)->
    $mdDialog.show(
      {
        controller: 'PlayerActionsController'
        controllerAs: 'actionsCtrl'
        templateUrl: 'app/shared/player/actions/actionsView.html'
        parent: angular.element(document.body)
        targetEvent: ev
        clickOutsideToClose:true
      }
    ).then( (answer)->
      vm.status = 'You said the information was "' + answer + '".'
    , ()->
      vm.status = 'You cancelled the dialog.')
    return

  return