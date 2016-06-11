angular.module("error.toast.controller", ['error.service']).controller("ToastController", function(ErrorService) {
  var vm;
  vm = this;
  vm.message = ErrorService.getMessage();
  vm.hide = function() {
    return ErrorService.hide();
  };
});
