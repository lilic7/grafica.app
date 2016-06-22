(function() {
  var ErrorService;
  ErrorService = function($mdToast, $location) {
    var getMessage, message, messages, redirect, setMessage, showMessage, showToast;
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
    setMessage = function(msgCode) {
      message = messages[msgCode].message;
      redirect = messages[msgCode].redirect;
      showMessage($mdToast, $location);
    };
    showMessage = function($mdToast, $location) {
      if (!showToast) {
        showToast = true;
        $mdToast.show({
          hideDelay: 3000,
          position: 'top right',
          controller: "ToastController",
          controllerAs: "toastCtrl",
          templateUrl: 'app/shared/error/toast/toastView.html'
        }).then(function() {
          showToast = false;
          if (redirect) {
            $location.url("/");
          }
        });
      }
    };
    getMessage = function() {
      return message;
    };

    /*   Returned factory */
    return {
      getMessage: getMessage,
      setMessage: setMessage
    };
  };
  ErrorService.$inject = ['$mdToast', '$location'];
  return angular.module("error.service", ['error.toast.controller']).factory("ErrorService", ErrorService);
})();
