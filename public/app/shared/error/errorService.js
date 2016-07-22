(function() {
  var ErrorService, getMessage, message, messages, setMessage;
  ErrorService = function() {
    return {
      getMessage: getMessage,
      setMessage: setMessage
    };
  };
  message = "";
  messages = {
    WRONG_MATCH_NAME: {
      message: "Acest tip de meci nu exista",
      redirect: true
    },
    MATCH_TOO_LONG: {
      message: "Durata meciului a trecut de limitele normale",
      redirect: false
    },
    NEGATIVE_TIME: {
      message: "SFAT: Reseteaza contorul!",
      redirect: false
    }
  };
  getMessage = function() {
    return message;
  };
  setMessage = function(msgCode) {
    message = "";
    if (messages[msgCode]) {
      message = messages[msgCode].message;
    }
  };
  return angular.module("error.service", []).factory("ErrorService", ErrorService);
})();
