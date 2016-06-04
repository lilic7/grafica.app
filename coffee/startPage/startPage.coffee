angular.module "startPage", ['ngMaterial']

.filter "ucfirst", ()->
  (input)->
    input = input || ""
    out = ""

    out = input.charAt 0
      .toUpperCase()  + input.substr 1

    out

.controller "StartPageController", ['ucfirstFilter', (ucfirstFilter)->
  vm = this
  vm.matches = [
    'minifotbal'
    'fotbal',
    'futsal',
    'handbal',
    'baschet',
    'volei',
    'tenis'
  ]

  vm.image = ()->
    parseInteger Math.random()  + 1

  return
]


