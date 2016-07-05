(->
  ErrorService = ()->
    {
      getMessage: getMessage
      setMessage: setMessage
    }

  message = ""

  messages =
    WRONG_MATCH_NAME:
      message: "Acest tip de meci nu exista"
      redirect: true
    MATCH_TOO_LONG:
      message: "Durata meciului a trecut de limitele normale"
      redirect: false
    NEGATIVE_TIME:
      message: "SFAT: Reseteaza contorul!"
      redirect: false

  getMessage = ->
    message

  setMessage = (msgCode)->
    message = messages[msgCode].message if messages[msgCode]
    return


  angular
    .module "error.service",  []
    .factory "ErrorService", ErrorService
)()