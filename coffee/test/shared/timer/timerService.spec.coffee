describe "timer.service", ->
  TimerService = null
  $interval = null
  ErrorService = null

  beforeEach module 'timer.service'
  
  beforeEach inject ($injector, _$interval_)->
    TimerService = $injector.get "TimerService"
    ErrorService = $injector.get "ErrorService"
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
  describe "minutes calculation", ->
    beforeEach ->
      TimerService.start()
      return

    afterEach ->
      TimerService.stop()
      return

    it "should correctly calculate total minutes", ->
        $interval.flush 300000
        expect(TimerService.getTotalMinutes()).toEqual "05"
        return

    it "should correctly calculate play minutes", ->
        $interval.flush 100000
        expect(TimerService.getPlayMinutes()).toEqual "07"
        return
    it "should correctly calculate time", ->
      $interval.flush 10000
      expect(TimerService.getTime()).toEqual "07:00"
      return

    it "should add minutes", ->
        TimerService.add 5
        expect(TimerService.getTime()).toEqual "12:00"
        return
    it "should substract minutes", ->
        TimerService.sub 10
        expect(TimerService.getTime()).toEqual "02:00"
        return
    it "should add seconds", ->
        TimerService.addSeconds 30
        expect(TimerService.getTime()).toEqual "02:30" 
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
      it "should throw ErrorService if time runs more than match duration", ->
        
        return
      return

    return

  return