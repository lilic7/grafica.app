angular.module "timer.service", []

.factory 'TimerService', ($interval)->

  #private elements
  startTime = 15 #seconds
  totalSeconds = 10

  factory = {}

  factory.time = "00:10"
  factory.markMinute = "00"
  factory.timerIsRunning = false

  factory.changeTotalSeconds = (minutes)->
    totalSeconds = minutes * 60 + startTime
    factory.calculateTime()
    return

  factory.resetTimer = ()->
    totalSeconds = startTime
    factory.calculateTime()
    return

  factory.modifyMinutes = (minutes)->
    totalSeconds = minutes * 60
    factory.calculateTime()
    return

  factory.addMinutes = (minutes)->
    totalSeconds += 60 * minutes
    factory.calculateTime()
    return

  factory.subMinutes = (minutes)->
    seconds = minutes * 60
    if totalSeconds > seconds
      totalSeconds -= seconds
      factory.calculateTime()

  factory.calculateTime = ()->
    hour = Math.floor totalSeconds / 3600
    minute = Math.floor ( totalSeconds - hour * 3600 ) / 60
    seconds = totalSeconds - ( hour * 3600 + minute * 60 )
    factory.markMinute = setMarkMinute totalSeconds
    factory.time = (if hour > 0 then hour + ":" else "") + (if minute < 10 then '0' + minute else minute) + ":" + (if seconds < 10 then '0' + seconds else seconds)
    return


  factory.startTimer = ()->
    if(not factory.timerIsRunning)
      factory.timer = $interval timer, 1000
    return

  factory.stopTimer = ()->
    $interval.cancel factory.timer
    factory.timerIsRunning = false
    return

  timer = ()->
    ++totalSeconds
    factory.calculateTime()
    factory.timerIsRunning = true
    return

  setMarkMinute = (seconds)->
    minute = Math.floor(seconds / 60)  + 1
    if minute < 10 then '0' + minute else minute

  factory