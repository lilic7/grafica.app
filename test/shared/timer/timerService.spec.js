describe("timer.service", function() {
  var $interval, ErrorService, TimerService;
  TimerService = null;
  $interval = null;
  ErrorService = null;
  beforeEach(module('timer.service'));
  beforeEach(inject(function($injector, _$interval_) {
    TimerService = $injector.get("TimerService");
    ErrorService = $injector.get("ErrorService");
    $interval = _$interval_;
  }));
  describe("start", function() {
    it("should start interval", function() {
      expect(TimerService.isOn()).toBeFalsy();
      TimerService.start();
      expect(TimerService.isOn()).toBeTruthy();
    });
    it("should not allow to start twice the timer", function() {
      expect(TimerService.isOn()).toBeTruthy();
      TimerService.start();
      expect(TimerService.isOn()).toBeTruthy();
    });
  });
  describe("stop interval", function() {
    it("should stop interval", function() {
      TimerService.stop();
      expect(TimerService.isOn()).toBeFalsy();
    });
  });
  describe("minutes calculation", function() {
    beforeEach(function() {
      TimerService.start();
    });
    afterEach(function() {
      TimerService.stop();
    });
    it("should correctly calculate total minutes", function() {
      $interval.flush(300000);
      expect(TimerService.getTotalMinutes()).toEqual("05");
    });
    it("should correctly calculate play minutes", function() {
      $interval.flush(100000);
      expect(TimerService.getPlayMinutes()).toEqual("07");
    });
    it("should correctly calculate time", function() {
      $interval.flush(10000);
      expect(TimerService.getTime()).toEqual("07:00");
    });
    it("should add minutes", function() {
      TimerService.add(5);
      expect(TimerService.getTime()).toEqual("12:00");
    });
    it("should substract minutes", function() {
      TimerService.sub(10);
      expect(TimerService.getTime()).toEqual("02:00");
    });
    it("should add seconds", function() {
      TimerService.addSeconds(30);
      expect(TimerService.getTime()).toEqual("02:30");
    });
    it("should modify time", function() {
      TimerService.modify(45);
      expect(TimerService.getTime()).toEqual("45:10");
    });
    describe("errors in TimerService", function() {
      beforeEach(function() {
        spyOn(ErrorService, "setMessage");
      });
      it("should throw ErrorService if substract till negative time", function() {
        TimerService.sub(50);
        expect(ErrorService.setMessage).toHaveBeenCalledWith("NEGATIVE_TIME");
      });
      it("should throw ErrorService if time runs more than match duration", function() {});
    });
  });
});
