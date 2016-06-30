(function() {
  var TimerService;
  TimerService = function($interval, ErrorService, SettingsService) {
    var add, addSeconds, calculateTime, getPlayMinutes, getTime, getTotalMinutes, isOn, modify, playMinutes, start, startTime, stop, sub, time, timer, timerInterval, timerIsRunning, toMinutes, totalMinutes, totalSeconds;
    startTime = 10;
    totalSeconds = 10;
    totalMinutes = "00";
    playMinutes = "01";
    timerIsRunning = false;
    time = "00:10";
    timerInterval = null;
    this.add = add;
    this.addSeconds = addSeconds;
    this.getPlayMinutes = getPlayMinutes;
    this.getTime = getTime;
    this.getTotalMinutes = getTotalMinutes;
    this.isOn = isOn;
    this.modify = modify;
    this.start = start;
    this.stop = stop;
    this.sub = sub;
    isOn = (function(_this) {
      return function() {
        return timerIsRunning;
      };
    })(this);
    getTotalMinutes = (function(_this) {
      return function() {
        return totalMinutes;
      };
    })(this);
    getPlayMinutes = (function(_this) {
      return function() {
        return playMinutes;
      };
    })(this);
    getTime = (function(_this) {
      return function() {
        return time;
      };
    })(this);
    start = (function(_this) {
      return function() {
        if (!timerIsRunning) {
          timerInterval = $interval(timer, 1000);
        }
      };
    })(this);
    stop = (function(_this) {
      return function() {
        $interval.cancel(timerInterval);
        timerIsRunning = false;
      };
    })(this);
    modify = (function(_this) {
      return function(minutes) {
        var seconds;
        seconds = minutes * 60;
        totalSeconds = seconds + startTime;
        calculateTime();
      };
    })(this);
    add = (function(_this) {
      return function(minutes) {
        if (totalSeconds > 600 && timerIsRunning) {
          ErrorService.setMessage("MATCH_TOO_LONG");
        }
        totalSeconds += minutes * 60;
        calculateTime();
      };
    })(this);
    sub = (function(_this) {
      return function(minutes) {
        var seconds;
        seconds = minutes * 60;
        if (totalSeconds > seconds) {
          totalSeconds -= seconds;
          calculateTime();
        } else {
          ErrorService.setMessage("NEGATIVE_TIME");
        }
      };
    })(this);
    addSeconds = (function(_this) {
      return function(seconds) {
        totalSeconds += seconds;
        calculateTime();
      };
    })(this);
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
  };
  TimerService.$inject = ['$interval', 'ErrorService', 'SettingsService'];
  return angular.module("timer.service", []).service("TimerService", TimerService);
})();
