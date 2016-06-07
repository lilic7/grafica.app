angular.module("timer.service", []).factory('TimerService', function($interval) {
  var factory, setMarkMinute, startTime, timer, totalSeconds;
  startTime = 15;
  totalSeconds = 10;
  factory = {};
  factory.time = "00:10";
  factory.markMinute = "00";
  factory.timerIsRunning = false;
  factory.changeTotalSeconds = function(minutes) {
    totalSeconds = minutes * 60 + startTime;
    factory.calculateTime();
  };
  factory.resetTimer = function() {
    totalSeconds = startTime;
    factory.calculateTime();
  };
  factory.modifyMinutes = function(minutes) {
    totalSeconds = minutes * 60;
    factory.calculateTime();
  };
  factory.addMinutes = function(minutes) {
    totalSeconds += 60 * minutes;
    factory.calculateTime();
  };
  factory.subMinutes = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    if (totalSeconds > seconds) {
      totalSeconds -= seconds;
      return factory.calculateTime();
    }
  };
  factory.calculateTime = function() {
    var hour, minute, seconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);
    factory.markMinute = setMarkMinute(totalSeconds);
    factory.time = (hour > 0 ? hour + ":" : "") + (minute < 10 ? '0' + minute : minute) + ":" + (seconds < 10 ? '0' + seconds : seconds);
  };
  factory.startTimer = function() {
    if (!factory.timerIsRunning) {
      factory.timer = $interval(timer, 1000);
    }
  };
  factory.stopTimer = function() {
    $interval.cancel(factory.timer);
    factory.timerIsRunning = false;
  };
  timer = function() {
    ++totalSeconds;
    factory.calculateTime();
    factory.timerIsRunning = true;
  };
  setMarkMinute = function(seconds) {
    var minute;
    minute = Math.floor(seconds / 60) + 1;
    if (minute < 10) {
      return '0' + minute;
    } else {
      return minute;
    }
  };
  return factory;
});
