(->
  DataService = ->
    {
      firstTeam:  firstTeam
      secondTeam: secondTeam
    }

#===============================================================
  firstTeam = ->
    data[0]

  secondTeam = ->
    data[1]

#======================== TEAM class ===========================
  class Team
    constructor: ->
      @goals        = new Counter()
      @offsides     = new Counter()
      @corners      = new Counter()
      @name         = new Name()      
      @players      = new Componence()
      @substitutes  = new Componence()

    mark: ->
      @goals.add()
      return

#======================== NAME class ===========================
  class Name
    constructor: ->
      @name = ""

    get: ->
      @name
      
    set: (newName)->
      @name = newName.toUpperCase()
      return
#======================== PLAYER class ===========================
  class Player
    constructor: (@player)->



#======================== COMPONENCE class ===========================
  class Componence
    
    constructor: ->
      @str = ""
      @list = []
      
    getAsText: ->
      @str
      
    getAsList: ->
      @list

    set: (group)->
      @str = group.toUpperCase()
      players = @str.trim().split "\n"
      for player in players
        @list.push new Player(player)
      return
      

#===============================================================
  class Counter
    constructor: ->
      @counter = 0

    get: ->
      @counter

    add: ->
      @counter++
      return
#==================================================================

  data = [
    new Team()
    new Team()
  ]
#===================================================================
  angular
    .module "data.service", []
    .factory "DataService", DataService
)()