angular.module "timer.service", []

.factory 'TimerService', ($interval)->
  factory = {}
  factory.totalSeconds = 10
  factory.time = "00:10"
  factory.markMinute = "00"
  factory.suplimentarTime = 0
  factory.timerIsRunning = false

  factory.changeTotalSeconds = (minutes)->
    factory.totalSeconds = minutes * 60 + 5
    factory.calculateTime()
    return

  factory.resetTimer = ()->
    factory.totalSeconds = 5
    factory.calculateTime()
    return

  factory.addMinutes = (minutes)->
    factory.totalSeconds += 60 * minutes
    factory.calculateTime()
    return

  factory.subMinutes = (minutes)->
    seconds = minutes * 60
    if factory.totalSeconds > seconds
      factory.totalSeconds -= seconds
      factory.calculateTime()

  factory.calculateTime = ()->
    hour = Math.floor factory.totalSeconds / 3600
    minute = Math.floor ( factory.totalSeconds - hour * 3600 ) / 60
    seconds = factory.totalSeconds - ( hour * 3600 + minute * 60 )
    factory.markMinute = setMarkMinute factory.totalSeconds
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
    ++factory.totalSeconds
    factory.calculateTime()
    factory.timerIsRunning = true
    return

  setMarkMinute = (seconds)->
    minute = Math.floor(seconds / 60)  + 1
    if minute < 10 then '0' + minute else minute

  factory