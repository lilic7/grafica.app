(->
  'use strict'
  PlayerService = ->

    preparePlayer = (data)->
      data = data.replace /( +)/g, " "
      parts = data.split " "
      {
        number: parts[0]
        name: parts[1] + " " + parts[2]
      }

    {
      preparePlayer: preparePlayer
    }

  angular
    .module "player.service", []
    .factory "PlayerService", PlayerService
)()