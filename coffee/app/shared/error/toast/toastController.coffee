(->
  ToastController = (ErrorService)->
    vm = @
    vm.message = ErrorService.getMessage()
    return

  ToastController.$inject = ['ErrorService']

  angular
    .module "error.toast.controller",
      ['error.service']
    .controller "ToastController", ToastController
)()