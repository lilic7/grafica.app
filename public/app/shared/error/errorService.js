(function() {
  var ErrorService;
  ErrorService = function($mdToast, $location) {
    var message, messages, redirect, showToast;
    message = "";
    redirect = false;
    showToast = false;
    messages = {
      WRONG_MATCH_NAME: {
        message: "Acest tip de meci nu exista",
        redirect: true
      },
      MATCH_TOO_LONG: {
        message: "Durata meciului a trecut de limitele normale",
        redirect: false
      },
      NEGATIVE_TIME: {
        message: "SFAT: Reseteaza contorul!",
        redirect: false
      }
    };
    this.setMessage = function(msgCode) {
      message = messages[msgCode].message;
      redirect = messages[msgCode].redirect;
      this.showMessage($mdToast, $location);
    };
    this.showMessage = function($mdToast, $location) {
      if (!showToast) {
        showToast = true;
        $mdToast.show({
          hideDelay: 3000,
          position: 'top right',
          controller: "ToastController",
          controllerAs: "toastCtrl",
          templateUrl: 'app/shared/error/toast/toastView.html'
        }).then(function() {
          this.showToast = false;
          if (redirect) {
            $location.url("/");
          }
        });
      }
    };
    this.getMessage = function() {
      return message;
    };
  };
  ErrorService.$inject = ['$mdToast', '$location'];
  return angular.module("error.service", ['error.toast.controller']).service("ErrorService", ErrorService);
})();
