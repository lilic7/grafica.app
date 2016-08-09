(->
  HomeController = (SportService)->
    vm = @
    vm.matches = SportService.select()

    return

  HomeController.$inject = ['SportService']

  angular
    .module "home.controller",
      ['sport.service']
    .controller "HomeController", HomeController
)()