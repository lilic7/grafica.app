(function() {
  var ToastService, showError;
  ToastService = function($mdToast) {
    return {
      showError: function() {
        return showError($mdToast);
      }
    };
  };
  showError = function($mdToast, $location) {
    var showToast;
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
  ToastService.$inject = ["$mdToast", "$location"];
  return angular.module("error.toast.service", ['error.toast.controller']).factory("ToastService", ToastService);
})();
