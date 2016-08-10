describe("UNIT: SportService", function() {
  var $httpBackend, sportService, sports, sports_arr, sports_obj;
  sportService = null;
  $httpBackend = null;
  sports = null;
  sports_obj = {
    "sports": [
      {
        "name": "fotbal",
        "show": true
      }, {
        "name": "minifotbal",
        "show": false
      }, {
        "name": "handbal",
        "show": true
      }
    ]
  };
  sports_arr = [
    {
      "name": "fotbal",
      "show": true
    }, {
      "name": "minifotbal",
      "show": false
    }, {
      "name": "handbal",
      "show": true
    }
  ];
  beforeEach(module("sport.service"));
  beforeEach(inject(function($injector) {
    sportService = $injector.get("SportService");
    $httpBackend = $injector.get("$httpBackend");
    $httpBackend.whenGET("json/sports.json").respond(200, sports_obj);
    sportService.setSports();
    $httpBackend.flush();
    sports = sportService.getSports();
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  describe("setSports", function() {
    it("should make http request to json/sports.json", function() {
      expect(sports).toEqual(sports_arr);
    });
    it("should match elements from sports.json", function() {
      expect(sports[0]).toEqual({
        name: "fotbal",
        show: true
      });
      expect(sports[1]).toEqual({
        name: "minifotbal",
        show: false
      });
      expect(sports[2]).toEqual({
        name: "handbal",
        show: true
      });
    });
  });
  describe("selectSports", function() {
    it("should select only sports with show = true", function() {
      var selected;
      selected = [
        {
          "name": "fotbal",
          "show": true
        }, {
          "name": "handbal",
          "show": true
        }
      ];
      expect(sportService.getSelected()).toEqual(selected);
    });
  });
});
