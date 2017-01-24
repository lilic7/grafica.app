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
      @componence   = ""
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

#======================== NAME class ===========================
  class Componence
    constructor: ->
      @players = ""
      @substitutes = ""

    get: ->
      @name

    set: (newName)->
      @name = newName.toUpperCase()
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