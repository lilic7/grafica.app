describe("timer.service", function() {
  var $interval, ErrorService, SettingsService, TimerService;
  TimerService = null;
  $interval = null;
  ErrorService = null;
  SettingsService = null;
  beforeEach(module('timer.service'));
  beforeEach(inject(function($injector, _$interval_) {
    TimerService = $injector.get("TimerService");
    ErrorService = $injector.get("ErrorService");
    SettingsService = jasmine.createSpy(SettingsService, "getRepriza");
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
  describe("reset timer", function() {
    it("should reset timer", function() {
      TimerService.reset();
      expect(TimerService.isOn()).toBeFalsy();
      expect(TimerService.getTime()).toEqual("00:10");
    });
  });
  describe("minutes calculation", function() {
    beforeEach(function() {
      TimerService.start();
      $interval.flush(300000);
    });
    afterEach(function() {
      TimerService.stop();
      TimerService.reset();
    });
    it("should correctly calculate total minutes", function() {
      expect(TimerService.getTotalMinutes()).toEqual("05");
    });
    it("should correctly calculate play minutes", function() {
      expect(TimerService.getPlayMinutes()).toEqual("06");
    });
    it("should correctly calculate time", function() {
      expect(TimerService.getTime()).toEqual("05:10");
    });
    it("should add minutes", function() {
      TimerService.add(5);
      expect(TimerService.getTime()).toEqual("10:10");
    });
    it("should substract minutes", function() {
      TimerService.sub(3);
      expect(TimerService.getTime()).toEqual("02:10");
    });
    it("should add seconds", function() {
      TimerService.addSeconds(30);
      expect(TimerService.getTime()).toEqual("05:40");
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
      it("should NOT throw ErrorService for normal substractions", function() {
        TimerService.sub(1);
        expect(ErrorService.setMessage).not.toHaveBeenCalled();
      });
      it("should throw ErrorService if time runs more than match duration");
    });
  });
});
