(->
  class TimerService
    constructor: (@$interval, @ErrorService, @SettingsService) ->

    add: add
    addSeconds: addSeconds
    getPlayMinutes: getPlayMinutes
    getTime: getTime
    getTotalMinutes: getTotalMinutes
    isOn: isOn
    modify: modify
    sub: sub
    start: ($interval)->
      timerInterval = interval timer, 1000 if not timerIsRunning
      return
    stop: (interval)->
      interval.cancel timerInterval
      timerIsRunning = false
      return

  #############################################

  startTime = 10
  totalSeconds = 10
  totalMinutes = "00"
  playMinutes = "01"
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

  start = (interval)->
    timerInterval = interval timer, 1000 if not timerIsRunning
    return

  stop = (interval)->
    interval.cancel timerInterval
    timerIsRunning = false
    return

  modify = (minutes)->
    seconds = minutes * 60
    totalSeconds = seconds + startTime
    calculateTime()
    return

  add = (minutes)->
    if(totalSeconds > 600 and timerIsRunning)
      ErrorService.setMessage "MATCH_TOO_LONG"
    totalSeconds += minutes * 60
    calculateTime()
    return

  sub = (minutes)->
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

  calculateTime = ()->
    seconds = totalSeconds % 60
    totalMinutes = toMinutes totalSeconds
    playMinutes = toMinutes totalSeconds + 60
    time = totalMinutes + ":" + (if seconds < 10 then '0' + seconds else seconds)
    return

  TimerService.$inject = ['$interval', 'ErrorService', 'SettingsService']
  angular
    .module "timer.service", []
    .factory "TimerService", ()-> new TimerService()
)()


#(->
#  startTime = 10 #seconds
#  totalSeconds = 10
#  totalMinutes = "00"
#  playMinutes = "01"
#  timerIsRunning = false
#  time = "00:10"
#  timerInterval = null
#
#  TimerService = ($interval, ErrorService, SettingsService)->
#
#    @add              = add
#    @addSeconds       = addSeconds
#    @getPlayMinutes   = getPlayMinutes
#    @getTime          = getTime
#    @getTotalMinutes  = getTotalMinutes
#    @isOn             = isOn
#    @modify           = modify
#    @sub              = sub
#    @start            = startTimer $interval
#    @stop             = stopTimer $interval
#
#
#    return
#
#  isOn = ->
#    timerIsRunning
#
#  getTotalMinutes = ->
#    totalMinutes
#
#  getPlayMinutes = ->
#    playMinutes
#
#  getTime = ->
#    time
#
#  startTimer = (interval)->
#    timerInterval = interval timer, 1000 if not timerIsRunning
#    return
#
#  stopTimer = (interval)->
#    interval.cancel timerInterval
#    timerIsRunning = false
#    return
#
#  modify = (minutes)->
#    seconds = minutes * 60
#    totalSeconds = seconds + startTime
#    calculateTime()
#    return
#
#  add = (minutes)->
#    if(totalSeconds > 600 and timerIsRunning)
#      ErrorService.setMessage "MATCH_TOO_LONG"
#    totalSeconds += minutes * 60
#    calculateTime()
#    return
#
#  sub = (minutes)->
#    seconds = minutes * 60
#    if totalSeconds > seconds
#      totalSeconds -= seconds
#      calculateTime()
#    else
#      ErrorService.setMessage "NEGATIVE_TIME"
#    return
#
#  addSeconds = (seconds)->
#    totalSeconds += seconds
#    calculateTime()
#    return
#
#  timer = ->
#    ++totalSeconds
#    calculateTime()
#    timerIsRunning = true
#    return
#
#  toMinutes = (seconds)->
#    minutes = Math.floor seconds / 60
#    if minutes < 10 then '0' + minutes else minutes
#
#  calculateTime = ()->
#    seconds = totalSeconds % 60
#    totalMinutes = toMinutes totalSeconds
#    playMinutes = toMinutes totalSeconds + 60
#    time = totalMinutes + ":" + (if seconds < 10 then '0' + seconds else seconds)
#    return
#
#  TimerService.$inject = ['$interval', 'ErrorService', 'SettingsService']
#
#  angular
#    .module "timer.service", []
#    .service "TimerService", TimerService
#)()