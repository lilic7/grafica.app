(->
  DataService = ()->
    {
      firstTeam:  new Team()
      secondTeam: new Team()
    }

#======================== TEAM class ===========================
  class Team

    constructor: ()->
      @goals        = new Counter()
      @offsides     = new Counter()
      @corners      = new Counter()
<<<<<<< HEAD
      @name         = new Name()      
      @players      = new Componence()
      @substitutes  = new Componence()
=======
      @name         = new Name();
      @componence   = new Componence()
      @players      = {}
      @substitutes  = {}
>>>>>>> a5840609a089393c9b5f1873ef83cea91b115d3a

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

<<<<<<< HEAD


=======
>>>>>>> a5840609a089393c9b5f1873ef83cea91b115d3a
#======================== COMPONENCE class ===========================
  class Componence
    
    constructor: ->
<<<<<<< HEAD
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
=======
      @players = ""
      @substitutes = ""
      return

    set: ()->
      return



#===================================================================
>>>>>>> a5840609a089393c9b5f1873ef83cea91b115d3a
  class Counter
    constructor: ->
      @counter = 0

    get: ->
      @counter

    add: ->
      @counter++
      return
#===================================================================
  angular
    .module "data.service", []
    .factory "DataService", DataService
)()