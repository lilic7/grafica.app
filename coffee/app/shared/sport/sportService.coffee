(->
    SportService = ($http)->
        #add code here
        {
            setSports: -> setSports $http
            getSports: -> sports
            select: select
        }
    #all fuctions definition comes here

    sports = {}

    setSports = ($http)->
        sports = null
        $http { method: "GET", url: "json/sports.json"}
            .then (response)->
                sports = response.data.sports
                return
        return

    select = ->
        selectedSports = []
        sports.map (sport)->
            selectedSports.push sport if sport['show']
        selectedSports

    SportService.$inject = ["$http"]
    angular
        .module "sport.service", []
        .factory "SportService", SportService
)()