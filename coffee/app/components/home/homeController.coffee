(->
  HomeController = (SportService)->
    vm = @
    vm.matches = SportService.getSelected()
    return

  HomeController.$inject = ['SportService']

  angular
    .module "home.controller",
      ['sport.service']
    .controller "HomeController", HomeController
)()