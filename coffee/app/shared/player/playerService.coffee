(->
#  'use strict'
  PlayerService = ->
    {
      preparePlayer: preparePlayer
    }


  preparePlayer = (data)->
    data = data.replace /( +)/g, " "
    parts = data.split " "
    number = parts.shift()
    name = parts.join " "
    {
      number: number
      name: name
    }

  angular
    .module "player.service", []
    .factory "PlayerService", PlayerService
)()