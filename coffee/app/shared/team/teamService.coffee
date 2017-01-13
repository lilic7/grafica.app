(->
#  class TeamService
#    name: ""
#

        TeamService = ->
          {
            getName: getName
            getPlayers: -> parse players_txt
            getSubstitutes: -> parse substitutes_txt
            getPlayers_txt: getPlayersTxt
            setPlayers_txt: (text) -> setPlayersTxt text
            getSubstitutes_txt: getSubstitutesTxt
            setSubstitutes_txt: (text) -> setSubstitutesTxt text
          }

        name = ""

        players_txt = ""
        substitutes_txt = ""

        getName = ->
          name

        parse = (str)->
          list = str.split "\n"
          allPlayers = []
          for row in list
            obj = {
              "all": row.trim().toUpperCase()
            }
            allPlayers.push(obj)
          allPlayers

        getPlayersTxt = ->
          players_txt

        setPlayersTxt = (text)->
          players_txt = text

        getSubstitutesTxt = ->
          substitutes_txt

        setSubstitutesTxt = (text)->
          substitutes_txt = text


        angular
          .module "team.service", []
          .factory "TeamService", TeamService
)()