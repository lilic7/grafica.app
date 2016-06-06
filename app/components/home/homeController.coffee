angular.module "home.controller", []

.controller "HomeController", ()->
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
  return