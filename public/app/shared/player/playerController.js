angular.module("player.controller", ['ucfirstFilter']).controller("PlayerController", function() {
  var vm;
  vm = this;
  vm.player = {};
  vm.preparePlayer = function(data) {
    var parts;
    data = data.replace(/( +)/g, " ");
    parts = data.split(" ");
    return vm.player = {
      number: parts[0],
      name: parts[1] + " " + parts[2]
    };
  };
});
