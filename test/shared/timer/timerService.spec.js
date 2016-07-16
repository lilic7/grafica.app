describe("timer.service", function() {
  var $timeout, TimerService;
  TimerService = null;
  $timeout = null;
  beforeEach(module('timer.service'));
  beforeEach(inject(function($injector) {
    TimerService = $injector.get("TimerService");
    return $timeout = $injector.get("$timeout");
  }));
  describe("start", function() {});
});
