(->
  'use strict'
  PlayerService = ->
    {
      preparePlayer: preparePlayer
    }


  preparePlayer = (data)->
    console.log data
    data = data.replace /( +)/g, " "
    parts = data.split " "
    {
      number: parts[0]
      name: parts[1] + " " + parts[2]
    }

  angular
    .module "player.service", []
    .factory "PlayerService", PlayerService
)()