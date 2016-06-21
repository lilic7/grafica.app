(->
  wordFirst = ()->
    (input)->
      input = input || ""
      out = ""
      words = input.split ' '

      out += rewrite word for word in words

      out

  rewrite = (word)->
    word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() + " "


  angular
  .module "wordFirstFilter", []
  .filter 'wordFirst', wordFirst
)()