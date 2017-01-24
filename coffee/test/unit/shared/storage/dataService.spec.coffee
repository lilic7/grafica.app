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

      beforeEach ->
        firstTeam.componence.players.set "22 OCTAVIAN VĂTAVU\n2   VLADIMIR GHENAITIS\n5   ION ARABADJI\n6   EDUARD AVRAM"
        firstTeam.componence.substitutes.set "4   ANDREI CUȘNIR\n9   VADIM ARAMA\n21 IVAN LACUSTA"
        return

      return


    return


  return