(->
  'use strict'
  PlayerController = (PlayerService)->
    vm = @
    vm.player = player
    #vm.preparePlayer = PlayerService.preparePlayer(vm.player)
    vm.showAdvanced = showAdvanced

    return

  player = {}

  showAdvanced = ($mdDialog, ev)->
    $mdDialog
      .show
        controller: 'PlayerActionsController'
        controllerAs: 'actionsCtrl'
        templateUrl: 'app/shared/player/actions/actionsView.html'
        parent: angular.element document.body
        targetEvent: ev
        clickOutsideToClose: true
    return

  PlayerController.$inject = ['PlayerService', '$mdDialog']

  angular
    .module "player.controller",
      [
        'wordFirstFilter',
        'player.actions.controller'
        'player.service'
      ]
    .controller "PlayerController", PlayerController
)()