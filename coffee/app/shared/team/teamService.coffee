(->
        TeamService = ->
          {
            getName: getName
            setName: (name)-> setName name

            getPlayers: -> parse players_txt

            getSubstitutes: -> parse substitutes_txt

            # jucatori
            getPlayers_txt: getPlayersTxt
            setPlayers_txt: (text) -> setPlayersTxt text

            # rezerve
            getSubstitutes_txt: getSubstitutesTxt
            setSubstitutes_txt: (text) -> setSubstitutesTxt text

            getGoals: getGoals

            mark: mark
          }

        name = ""

        goals = 0

        players_txt = ""
        substitutes_txt = ""

        getName = ->
          name

        setName = (newName)->
          name = newName


        getGoals = ->
          goals

        mark = ->
          goals++
          return

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