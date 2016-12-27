describe "UNIT: SportService", ->
  sportService = null
  $httpBackend = null
  sports = null
  
  sports_obj =
    "sports": [
      {"name": "fotbal", "show": true}
      {"name": "minifotbal", "show": false}
      {"name": "handbal", "show": true}
    ]
    
  sports_arr = [
    {"name": "fotbal", "show": true}
    {"name": "minifotbal", "show": false}
    { "name": "handbal", "show": true }
  ]

  beforeEach module "sport.service"
  
  beforeEach inject ($injector)->
    sportService = $injector.get "SportService"
    $httpBackend = $injector.get "$httpBackend"
    $httpBackend
      .whenGET "json/sports.json"
      .respond 200, sports_obj
    sportService.setSports()
    $httpBackend.flush()
    sports = sportService.getSports()
    return

  afterEach ->
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
    return

  describe "setSports", ->
    it "should make http request to json/sports.json", ->
      expect(sports).toEqual sports_arr
      return

    it "should match elements from sports.json", ->
      expect(sports[0]).toEqual {name:"fotbal", show: true}
      expect(sports[1]).toEqual {name:"minifotbal", show: false}
      expect(sports[2]).toEqual {name:"handbal", show: true}
      return

    return

  describe "selectSports", ->
    it "should select only sports with show = true", ->

        selected = [
          { "name": "fotbal", "show": true }
          { "name": "handbal", "show": true }
        ]  
      
        expect(sportService.getSelected()).toEqual selected
        return
    return
    
  return