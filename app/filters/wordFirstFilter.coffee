angular.module "wordFirstFilter", []
.filter 'wordFirst', ()->
  (input)->
    input = input || ""
    out = ""

    out = input.charAt 0
      .toUpperCase()  + input.substr(1).toLowerCase()

    out