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
      @name         = new Name();
      @componence   = new Componence()
      @players      = {}
      @substitutes  = {}

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

#======================== COMPONENCE class ===========================
  class Componence
    
    constructor: ->
      @players = ""
      @substitutes = ""
      return

    set: ()->
      return



#===================================================================
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