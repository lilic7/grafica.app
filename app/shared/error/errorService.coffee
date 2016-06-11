angular.module "error.service", ['error.toast.controller']

.factory "ErrorService", ($mdToast, $location)->
  showMessage = ''

  messages = {
    WRONG_MATCH_NAME: {
      message: "Acest tip de meci nu exista"
      redirect: true
    }
    MATCH_TOO_LONG: {
      message: "Durata meciului a trecut de limitele normale"
      redirect: false
    }
    NEGATIVE_TIME: {
      message: "SFAT: Reseteaza contorul!"
      redirect: false
    }
  }

  factory = {}

  factory.showToast = false

  factory.getMessage = ()->
    showMessage

  factory.setMessage = (msgCode)->
    if not factory.showToast
      factory.showToast = true
      showMessage = messages[msgCode].message
      $mdToast.show({
        hideDelay: 3000
        position: 'top right'
        controller: "ToastController"
        controllerAs: "toastCtrl"
        templateUrl: 'app/shared/error/toast/toastView.html'
      }).then ()->
        factory.showToast = false
        $location.url "/" if messages[msgCode].redirect
    return

  return factory