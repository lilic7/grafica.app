describe "timer.service", ->
  TimerService = null
  $interval = null
  ErrorService = null
  SettingsService = null

  beforeEach module 'timer.service'
  
  beforeEach inject ($injector, _$interval_)->
    TimerService = $injector.get "TimerService"
    ErrorService = $injector.get "ErrorService"
    SettingsService = jasmine.createSpy SettingsService, "getRepriza"
    $interval = _$interval_
    return

  describe "start", ->
    it "should start interval", ->
      expect(TimerService.isOn()).toBeFalsy();
      TimerService.start();
      expect(TimerService.isOn()).toBeTruthy();
      return

    it "should not allow to start twice the timer", ->
        expect(TimerService.isOn()).toBeTruthy()
        TimerService.start()
        expect(TimerService.isOn()).toBeTruthy()
        return
    return
    
  describe "stop interval", ->
    it "should stop interval", ->
        TimerService.stop()
        expect(TimerService.isOn()).toBeFalsy()
        return
    return

  describe "reset timer", ->
    it "should reset timer", ->
        TimerService.reset()
        expect(TimerService.isOn()).toBeFalsy() 
        expect(TimerService.getTime()).toEqual "00:10"
        return
    return  
  describe "minutes calculation", ->
    beforeEach ->
      TimerService.start()
      $interval.flush 300000
      return

    afterEach ->
      TimerService.stop()
      TimerService.reset()
      return

    it "should correctly calculate total minutes", ->
        expect(TimerService.getTotalMinutes()).toEqual "05"
        return

    it "should correctly calculate play minutes", ->
        expect(TimerService.getPlayMinutes()).toEqual "06"
        return
    it "should correctly calculate time", ->
      expect(TimerService.getTime()).toEqual "05:10"
      return

    it "should add minutes", ->
        TimerService.add 5
        expect(TimerService.getTime()).toEqual "10:10"
        return
    it "should substract minutes", ->
        TimerService.sub 3
        expect(TimerService.getTime()).toEqual "02:10"
        return
    it "should add seconds", ->
        TimerService.addSeconds 30
        expect(TimerService.getTime()).toEqual "05:40"
        return
    it "should modify time", ->        
        TimerService.modify 45
        expect(TimerService.getTime()).toEqual "45:10"
        return

    describe "errors in TimerService", ->
      beforeEach ->
          spyOn ErrorService, "setMessage"
          return
      it "should throw ErrorService if substract till negative time", ->
        TimerService.sub 50
        expect(ErrorService.setMessage).toHaveBeenCalledWith "NEGATIVE_TIME"
        return

      it "should NOT throw ErrorService for normal substractions", ->
        TimerService.sub 1
        expect(ErrorService.setMessage).not.toHaveBeenCalled()
        return
      it "should throw ErrorService if time runs more than match duration"
      return

    return

  return