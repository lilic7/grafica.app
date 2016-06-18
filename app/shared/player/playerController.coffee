angular.module "player.controller",
  [
    'ucfirstFilter'
  ]
.controller "PlayerController", ()->
  vm = this

  vm.player = {}

  vm.preparePlayer = (data)->
    data = data.replace /( +)/g, " "
    parts = data.split " "
    vm.player = {
      number: parts[0]
      name: parts[1] + " " + parts[2]
    }

  return