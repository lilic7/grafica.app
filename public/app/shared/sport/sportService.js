(function() {
  var SportService, select, selected, setSports, sports;
  SportService = function($http) {
    return {
      getSelected: function() {
        return selected;
      },
      getSports: function() {
        return sports;
      },
      setSports: function() {
        return setSports($http);
      }
    };
  };
  sports = {};
  selected = [];
  setSports = function($http) {
    sports = null;
    $http({
      method: "GET",
      url: "json/sports.json"
    }).then(function(response) {
      sports = response.data.sports;
      selected = select();
    });
  };
  select = function() {
    var selectedSports;
    selectedSports = [];
    sports.map(function(sport) {
      if (sport['show']) {
        return selectedSports.push(sport);
      }
    });
    return selectedSports;
  };
  SportService.$inject = ["$http"];
  return angular.module("sport.service", []).factory("SportService", SportService);
})();
