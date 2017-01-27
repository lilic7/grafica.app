describe "UNIT: data.service", ->
  DataService = null

  beforeEach module "data.service"

  beforeEach inject (_DataService_)->
    DataService = _DataService_
    return

  it "should be defined", ->
    expect DataService
      .toBeDefined()
    return

  describe "team properties", ->

    firstTeam = null
    secondTeam = null

    beforeEach ->
      firstTeam = DataService.firstTeam()
      secondTeam = DataService.secondTeam()
      return

    describe "name property", ->

      it "should return empty string if name is not set", ->
        expect firstTeam.name.get()
          .toBe ""
        return

      it "should return uppercase team name", ->
        firstTeam.name.set "FC Dacia"
        secondTeam.name.set "FC zimbru"

        expect firstTeam.name.get()
          .toBe "FC DACIA"
        expect secondTeam.name.get()
          .toBe "FC ZIMBRU"
        return

      return

    describe "goals property", ->

      it "should be 0 on initialization", ->
        expect firstTeam.goals.get()
          .toBe 0
        return

      it "should add goal if team marked", ->
        firstTeam.mark()
        expect firstTeam.goals.get()
          .toBe 1
        return

      return

    describe "componence property", ->

      players_text = "22 octavian VĂTAVU"
      players_list = [{"22 octavian VĂTAVU"}]

      substitutes_text = "4   ANDREI CUȘNIR\n9   VADIM ARAMA\n21 IVAN LACUSTA\n13 nichifor sarbu"
      substitutes_list = [{"4   ANDREI CUȘNIR"}, {"9   VADIM ARAMA"}, {"21 IVAN LACUSTA"}, {"13 NICHIFOR SARBU"}]

      beforeEach ->
        firstTeam.players.set players_text
        firstTeam.substitutes.set substitutes_text
        return

      it "should have set the players", ->
        expect firstTeam.players.getAsText()
          .toEqual "22 OCTAVIAN VĂTAVU"
        return

      it "should fill the list of players", ->
        list = firstTeam.players.getAsList()
        expect list.length
          .toEqual 1
        return

      it "should fill the list of substitutes", ->
        list = firstTeam.substitutes.getAsList()
        expect list.length
          .toEqual 4
        return


      return


    return


  return