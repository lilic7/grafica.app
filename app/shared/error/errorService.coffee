(->
  ErrorService = ($mdToast, $location)->

    message = ""
    redirect = false
    showToast = false

    messages =
      WRONG_MATCH_NAME:
        message: "Acest tip de meci nu exista"
        redirect: true
      MATCH_TOO_LONG:
        message: "Durata meciului a trecut de limitele normale"
        redirect: false
      NEGATIVE_TIME:
        message: "SFAT: Reseteaza contorul!"
        redirect: false

    @.setMessage = (msgCode)->
      message = messages[msgCode].message
      redirect = messages[msgCode].redirect
      @.showMessage $mdToast, $location
      return

    @.showMessage = ($mdToast, $location)->
      if not showToast
        showToast = true
        $mdToast
          .show
            hideDelay: 3000
            position: 'top right'
            controller: "ToastController"
            controllerAs: "toastCtrl"
            templateUrl: 'app/shared/error/toast/toastView.html'
          .then ->  
            @.showToast = false
            $location.url "/" if redirect
            return
      return

    @.getMessage = ->
      message

    return

  ErrorService.$inject = ['$mdToast', '$location']

  angular
    .module "error.service",
      ['error.toast.controller']
    .service "ErrorService", ErrorService
)()