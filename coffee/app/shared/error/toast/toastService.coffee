(->
  ToastService = ($mdToast)->
    {
      showError: ()->showError($mdToast)
    }

  showError = ($mdToast, $location)->
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
          showToast = false
          $location.url "/" if redirect
          return
    return


  ToastService.$inject = ["$mdToast", "$location"]

  angular
    .module "error.toast.service",
    [
      'error.toast.controller'
    ]
    .factory "ToastService", ToastService
)()