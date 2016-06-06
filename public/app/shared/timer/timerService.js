angular.module("timer.service", []).factory('TimerService', function($interval) {
  var factory, setMarkMinute, timer;
  factory = {};
  factory.totalSeconds = 10;
  factory.time = "00:10";
  factory.markMinute = "00";
  factory.suplimentarTime = 0;
  factory.timerIsRunning = false;
  factory.changeTotalSeconds = function(minutes) {
    factory.totalSeconds = minutes * 60 + 5;
    factory.calculateTime();
  };
  factory.resetTimer = function() {
    factory.totalSeconds = 5;
    factory.calculateTime();
  };
  factory.addMinutes = function(minutes) {
    factory.totalSeconds += 60 * minutes;
    factory.calculateTime();
  };
  factory.subMinutes = function(minutes) {
    var seconds;
    seconds = minutes * 60;
    if (factory.totalSeconds > seconds) {
      factory.totalSeconds -= seconds;
      return factory.calculateTime();
    }
  };
  factory.calculateTime = function() {
    var hour, minute, seconds;
    hour = Math.floor(factory.totalSeconds / 3600);
    minute = Math.floor((factory.totalSeconds - hour * 3600) / 60);
    seconds = factory.totalSeconds - (hour * 3600 + minute * 60);
    factory.markMinute = setMarkMinute(factory.totalSeconds);
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
    ++factory.totalSeconds;
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
