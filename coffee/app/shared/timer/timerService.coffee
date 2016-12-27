(->
  TimerService = ($interval, ErrorService)->
    {
      add: (minutes)-> add minutes
      addSeconds: addSeconds
      getPlayMinutes: getPlayMinutes
      getTime: getTime
      getTotalMinutes: getTotalMinutes
      isOn: isOn
      modify: modify
      reset: -> reset $interval
      sub: (minutes)-> sub minutes, ErrorService
      start: -> start $interval
      stop: -> stop $interval
    }

  startTime = 10 #seconds
  totalSeconds = 10
  totalMinutes = 0
  playMinutes = 1
  timerIsRunning = false

  time = "00:10"
  timerInterval = null

  isOn = ->
    timerIsRunning

  getTotalMinutes = ->
    totalMinutes

  getPlayMinutes = ->
    playMinutes

  getTime = ->
    time

  start = ($interval)->
    timerInterval = $interval(timer, 1000) if not timerIsRunning
    timerIsRunning = true
    return

  stop = ($interval)->
    $interval.cancel timerInterval
    timerIsRunning = false
    return

  reset = ($interval)->
    $interval.cancel timerInterval
    totalSeconds = 10
    calculateTime()
    return

  modify = (minutes)->
    seconds = minutes * 60
    totalSeconds = seconds + startTime
    calculateTime()
    return

  add = (minutes)->
    totalSeconds += minutes * 60
    calculateTime()
    return

  sub = (minutes, ErrorService)->
    seconds = minutes * 60
    if totalSeconds > seconds
      totalSeconds -= seconds
      calculateTime()
    else
      ErrorService.setMessage "NEGATIVE_TIME"
    return

  addSeconds = (seconds)->
    totalSeconds += seconds
    calculateTime()
    return

  timer = ->
    ++totalSeconds
    calculateTime()
    timerIsRunning = true
    return

  toMinutes = (seconds)->
    minutes = Math.floor seconds / 60
    if minutes < 10 then '0' + minutes else minutes

  calculateTime = ->
    seconds = totalSeconds % 60
    totalMinutes = toMinutes totalSeconds
    playMinutes = toMinutes totalSeconds + 60
    time = totalMinutes + ":" + (if seconds < 10 then '0' + seconds else seconds)
    return


  TimerService.$inject = ['$interval', 'ErrorService', 'SettingsService']
  
  angular
    .module "timer.service", 
    [
      'error.service',
      'settings.service'
    ]
    .factory "TimerService", TimerService
)()