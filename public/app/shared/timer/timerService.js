angular.module("timer.service", []).factory('TimerService', function($interval) {
  var calculateMinutes, calculateTime, factory, playMinutes, startTime, time, timer, timerIsRunning, totalMinutes, totalSeconds;
  startTime = 10;
  totalSeconds = 3600;
  playMinutes = "01";
  totalMinutes = "00";
  timerIsRunning = false;
  time = "00:10";
  factory = {};
  factory.isOn = function() {
    return timerIsRunning;
  };
  factory.getTotalMinutes = function() {
    return totalMinutes;
  };
  factory.getPlayMinutes = function() {
    calculateTime();
    return playMinutes;
  };
  factory.getTime = function() {
    return time;
  };
  factory.start = function() {
    if (!timerIsRunning) {
      factory.timerInterval = $interval(timer, 1000);
    }
  };
  factory.stop = function() {
    $interval.cancel(factory.timerInterval);
    timerIsRunning = false;
  };
  factory.reset = function() {
    totalSeconds = startTime;
    factory.stop();
    calculateTime();
  };
  factory.changeTotalSeconds = function(minutes) {
    totalSeconds = minutes * 60 + startTime;
    calculateTime();
  };
  factory.modifyMinutes = function(minutes) {
    totalSeconds = minutes * 60 + 55;
    calculateTime();
  };
  timer = function() {
    ++totalSeconds;
    calculateTime();
    timerIsRunning = true;
  };
  calculateMinutes = function(seconds) {
    var minute;
    minute = Math.floor(seconds / 60);
    if (minute < 10) {
      return '0' + minute;
    } else {
      return minute;
    }
  };
  calculateTime = function() {
    var hour, minute, seconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);
    totalMinutes = calculateMinutes(totalSeconds);
    playMinutes = calculateMinutes(totalSeconds + 60);
    time = totalMinutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
  };
  return factory;
});
