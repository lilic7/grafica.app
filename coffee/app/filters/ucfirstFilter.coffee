(->
  ucfirst = ()->
    (input)->
      input = input || ""
      out = ""

      out = input.charAt 0
        .toUpperCase()  + input.substr(1).toLowerCase()

      out.trim()
      
  angular
    .module "ucfirstFilter", []
    .filter 'ucfirst', ucfirst
)()