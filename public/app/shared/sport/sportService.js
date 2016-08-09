(function() {
  var SportService, select, setSports, sports;
  SportService = function($http) {
    return {
      setSports: function() {
        return setSports($http);
      },
      getSports: function() {
        return sports;
      },
      select: select
    };
  };
  sports = {};
  setSports = function($http) {
    sports = null;
    $http({
      method: "GET",
      url: "json/sports.json"
    }).then(function(response) {
      sports = response.data.sports;
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
