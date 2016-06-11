angular.module "error.toast.controller", ['error.service']

.controller "ToastController", (ErrorService)->

  vm = this

  vm.message = ErrorService.getMessage()

  vm.hide = ()->
    ErrorService.hide()

  return