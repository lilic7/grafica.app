(function() {
  var HomeController;
  HomeController = function(SportService) {
    var vm;
    vm = this;
    vm.matches = SportService.getSelected();
  };
  HomeController.$inject = ['SportService'];
  return angular.module("home.controller", ['sport.service']).controller("HomeController", HomeController);
})();
