describe "UNIT: team.service", ->
  TeamService = null


  beforeEach module "team.service"
  
  beforeEach inject ($injector)->
    TeamService = $injector.get "TeamService"
    return
    


  describe "functia: update", ->

    it "genereaza lista de jucatori (players) din players_txt", ->
      TeamService.setPlayers_txt "12 ionica Tudor"
      expect TeamService.getPlayers()
        .toEqual [{"all": "12 IONICA TUDOR"}]
      return

    it "genereaza lista de jucatori (players) din players_txt (mai multi jucatori)", ->
      TeamService.setPlayers_txt "12 ionica Tudor\n 15 COstica Alex"
      expect TeamService.getPlayers()
        .toEqual [{"all": "12 IONICA TUDOR"}, {"all": "15 COSTICA ALEX"}]
      return

    it "poate marca goluri", ->
      
      expect TeamService.getGoals()
        .toEqual 0
      
      TeamService.mark()
      
      expect TeamService.getGoals()      
        .toEqual 1
      
      return

    it "TEMP: instance of ?", ->
      class Player
        constructor: (@name)->
      return

    return




  return

