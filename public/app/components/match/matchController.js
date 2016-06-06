angular.module("match.controller", ['teamInfo.directive', 'settings.directive']).controller('MatchController', function($routeParams) {
  var vm;
  vm = this;
  vm.matchType = $routeParams.matchType;
});
