(function() {
  var ToastController;
  ToastController = function(ErrorService) {
    var vm;
    vm = this;
    vm.message = ErrorService.getMessage();
  };
  ToastController.$inject = ['ErrorService'];
  return angular.module("error.toast.controller", ['error.service']).controller("ToastController", ToastController);
})();
