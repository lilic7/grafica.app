angular.module("error.service", ['error.toast.controller']).factory("ErrorService", function($mdToast, $location) {
  var factory, messages, showMessage;
  showMessage = '';
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
  factory = {};
  factory.showToast = false;
  factory.getMessage = function() {
    return showMessage;
  };
  factory.setMessage = function(msgCode) {
    if (!factory.showToast) {
      factory.showToast = true;
      showMessage = messages[msgCode].message;
      $mdToast.show({
        hideDelay: 3000,
        position: 'top right',
        controller: "ToastController",
        controllerAs: "toastCtrl",
        templateUrl: 'app/shared/error/toast/toastView.html'
      }).then(function() {
        factory.showToast = false;
        if (messages[msgCode].redirect) {
          return $location.url("/");
        }
      });
    }
  };
  return factory;
});
