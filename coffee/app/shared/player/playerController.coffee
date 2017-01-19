(->
  'use strict'
  class PlayerController
    @$inject: ['PlayerService', '$mdDialog']

    constructor: (@PlayerService)->

    setPlayer: (player)->
      if typeof player is "string"
        @player = @PlayerService.preparePlayer player
      else console.log "player is not a string"
      return @player.number


    showAdvanced: ($mdDialog, ev)->
      $mdDialog
        .show
          controller: 'PlayerActionsController'
          controllerAs: 'actionsCtrl'
          templateUrl: 'app/shared/player/actions/actionsView.html'
          parent: angular.element document.body
          targetEvent: ev
          clickOutsideToClose: true
      return


  angular
    .module "player.controller",
      [
        'wordFirstFilter',
        'player.actions.controller',
        'player.service'
      ]
    .controller "PlayerController", PlayerController
)()