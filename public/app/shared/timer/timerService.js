(function() {
  var TimerService, add, addSeconds, calculateTime, getPlayMinutes, getTime, getTotalMinutes, isOn, modify, playMinutes, start, startTime, stop, sub, time, timer, timerInterval, timerIsRunning, toMinutes, totalMinutes, totalSeconds;
  TimerService = (function() {
    function TimerService($interval1, ErrorService1, SettingsService) {
      this.$interval = $interval1;
      this.ErrorService = ErrorService1;
      this.SettingsService = SettingsService;
    }

    TimerService.prototype.add = add;

    TimerService.prototype.addSeconds = addSeconds;

    TimerService.prototype.getPlayMinutes = getPlayMinutes;

    TimerService.prototype.getTime = getTime;

    TimerService.prototype.getTotalMinutes = getTotalMinutes;

    TimerService.prototype.isOn = isOn;

    TimerService.prototype.modify = modify;

    TimerService.prototype.sub = sub;

    TimerService.prototype.start = function($interval) {
      var timerInterval;
      if (!timerIsRunning) {
        timerInterval = interval(timer, 1000);
      }
    };

    TimerService.prototype.stop = function(interval) {
      var timerIsRunning;
      interval.cancel(timerInterval);
      timerIsRunning = false;
    };

    return TimerService;

  })();
  startTime = 10;
  totalSeconds = 10;
  totalMinutes = "00";
  playMinutes = "01";
  timerIsRunning = false;
  time = "00:10";
  timerInterval = null;
  isOn = function() {
    return timerIsRunning;
  };
  getTotalMinutes = function() {
    return totalMinutes;
  };
  getPlayMinutes = function() {
    return playMinutes;
  };
  getTime = function() {
    return time;
  };
  start = function(interval) {
    if (!timerIsRunning) {
      timerInterval = interval(timer, 1000);
    }
  };
  stop = function(interval) {
    interval.cancel(timerInterval);
    timerIsRunning = false;
  };
  modify = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    totalSeconds = seconds + startTime;
    calculateTime();
  };
  add = function(minutes) {
    if (totalSeconds > 600 && timerIsRunning) {
      ErrorService.setMessage("MATCH_TOO_LONG");
    }
    totalSeconds += minutes * 60;
    calculateTime();
  };
  sub = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    if (totalSeconds > seconds) {
      totalSeconds -= seconds;
      calculateTime();
    } else {
      ErrorService.setMessage("NEGATIVE_TIME");
    }
  };
  addSeconds = function(seconds) {
    totalSeconds += seconds;
    calculateTime();
  };
  timer = function() {
    ++totalSeconds;
    calculateTime();
    timerIsRunning = true;
  };
  toMinutes = function(seconds) {
    var minutes;
    minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
      return '0' + minutes;
    } else {
      return minutes;
    }
  };
  calculateTime = function() {
    var seconds;
    seconds = totalSeconds % 60;
    totalMinutes = toMinutes(totalSeconds);
    playMinutes = toMinutes(totalSeconds + 60);
    time = totalMinutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
  };
  TimerService.$inject = ['$interval', 'ErrorService', 'SettingsService'];
  return angular.module("timer.service", []).factory("TimerService", function() {
    return new TimerService();
  });
})();
