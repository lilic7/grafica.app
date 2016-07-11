(function() {
  var TimerService, add, addSeconds, calculateTime, getPlayMinutes, getTime, getTotalMinutes, isOn, modify, playMinutes, start, startTime, stop, sub, time, timer, timerInterval, timerIsRunning, toMinutes, totalMinutes, totalSeconds;
  TimerService = function($interval, ErrorService, SettingsService) {
    return {
      add: function(minutes) {
        return add(minutes, ErrorService, SettingsService.settings.repriza);
      },
      addSeconds: addSeconds,
      getPlayMinutes: getPlayMinutes,
      getTime: getTime,
      getTotalMinutes: getTotalMinutes,
      isOn: isOn,
      modify: modify,
      sub: function(minutes) {
        return sub(minutes, ErrorService);
      },
      start: function() {
        return start($interval);
      },
      stop: function() {
        return stop($interval);
      }
    };
  };
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
    timerIsRunning = true;
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
  add = function(minutes, ErrorService, durataRepriza) {
    durataRepriza = parseInt(durataRepriza);
    console.log(durataRepriza);
    if (totalSeconds > durataRepriza && timerIsRunning) {
      ErrorService.setMessage("MATCH_TOO_LONG");
    }
    totalSeconds += minutes * 60;
    calculateTime();
  };
  sub = function(minutes, ErrorService) {
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
  return angular.module("timer.service", ['error.service', 'settings.service']).factory("TimerService", TimerService);
})();
