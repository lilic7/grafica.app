angular.module "timer.service", []

.factory 'TimerService', ($interval)->

  #private elements
  startTime = 10 #seconds
  totalSeconds = 3600
  playMinutes = "01"
  totalMinutes = "00"
  timerIsRunning = false
  time = "00:10"
  
  factory = {}

  factory.isOn = ()->
    timerIsRunning

  factory.getTotalMinutes = ()->
    totalMinutes

  factory.getPlayMinutes = ()->
    calculateTime()
    playMinutes
    
  factory.getTime = ()->
    time

  factory.start = ()->
    if(not timerIsRunning)
      factory.timerInterval = $interval timer, 1000
    return

  factory.stop = ()->
    $interval.cancel factory.timerInterval
    timerIsRunning = false
    return

  factory.reset = ()->
    totalSeconds = startTime
    factory.stop()
    calculateTime()
    return

  factory.changeTotalSeconds = (minutes)->
    totalSeconds = minutes * 60 + startTime
    calculateTime()
    return

  factory.modifyMinutes = (minutes)->
    totalSeconds = minutes * 60 + 55
    calculateTime()
    return

  timer = ()->
    ++totalSeconds
    calculateTime()
    timerIsRunning = true
    return

  calculateMinutes = (seconds)->
    minute = Math.floor(seconds / 60)
    if minute < 10 then '0' + minute else minute

  calculateTime = ()->
    hour = Math.floor totalSeconds / 3600
    minute = Math.floor ( totalSeconds - hour * 3600 ) / 60
    seconds = totalSeconds - ( hour * 3600 + minute * 60 )
    totalMinutes = calculateMinutes totalSeconds
    playMinutes = calculateMinutes totalSeconds + 60
    time = totalMinutes + ":" + (if seconds < 10 then '0' + seconds else seconds)
    return

  factory