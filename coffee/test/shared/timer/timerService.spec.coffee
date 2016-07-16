describe "timer.service", ->
  TimerService = null
  $timeout = null

  beforeEach module 'timer.service'

  beforeEach inject ($injector)->
    TimerService = $injector.get "TimerService"
    $timeout = $injector.get "$timeout"

  describe "start", ->
    
    return

  return
