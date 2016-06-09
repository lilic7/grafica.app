angular.module "timer.service", []

.factory 'TimerService', ($interval)->

  #private elements
  startTime = 10 #seconds
  totalSeconds = 10
  totalMinutes = "00"
  playMinutes = "01"
  timerIsRunning = false
  time = "00:10"
  timerInterval = null
  
  factory = {}

  factory.isOn = ()->
    timerIsRunning

  factory.getTotalMinutes = ()->
    totalMinutes

  factory.getPlayMinutes = ()->
    playMinutes
    
  factory.getTime = ()->
    time

  factory.start = ()->
    if not timerIsRunning
      timerInterval = $interval timer, 1000
    return

  factory.stop = ()->
    $interval.cancel timerInterval
    timerIsRunning = false
    return

  factory.modify = (minutes)->
    seconds = minutes * 60
    totalSeconds = seconds + startTime
    calculateTime()
    return

  factory.add = (minutes)->
    totalSeconds += minutes * 60
    calculateTime()
    return

  factory.sub = (minutes)->
    seconds = minutes * 60
    if totalSeconds > seconds
      totalSeconds -= seconds
      calculateTime()
    return

  factory.addSeconds = (seconds)->
    totalSeconds += seconds
    calculateTime()

  timer = ()->
    ++totalSeconds
    calculateTime()
    timerIsRunning = true
    return

  toMinutes = (seconds)->
    minutes = Math.floor seconds / 60
    if minutes < 10 then '0' + minutes else minutes

  calculateTime = ()->
    seconds = totalSeconds % 60
    totalMinutes = toMinutes totalSeconds
    playMinutes = toMinutes totalSeconds + 60
    time = totalMinutes + ":" + (if seconds < 10 then '0' + seconds else seconds)
    return

  factory