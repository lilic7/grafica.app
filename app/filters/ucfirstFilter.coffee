(->
  ucfirst = ()->
    (input)->
      input = input || ""
      out = ""

      out = input.charAt 0
        .toUpperCase()  + input.substr(1).toLowerCase()

      out
  angular
  .module "ucfirstFilter", []
  .filter 'ucfirst', ucfirst
)()