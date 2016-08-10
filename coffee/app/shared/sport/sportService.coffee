(->
    SportService = ($http)->
        {
            getSelected: -> selected
            getSports: -> sports
            setSports: -> setSports $http
        }

    sports = {}
    selected = []

    setSports = ($http)->
        sports = null
        $http { method: "GET", url: "json/sports.json"}
            .then (response)->
                sports = response.data.sports
                selected = select()
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