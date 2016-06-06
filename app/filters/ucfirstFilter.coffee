angular.module "ucfirstFilter", []
.filter 'ucfirst', ()->
  (input)->
    input = input || ""
    out = ""

    out = input.charAt 0
    .toUpperCase()  + input.substr 1

    out