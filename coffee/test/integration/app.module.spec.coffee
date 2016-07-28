describe "Midway: App Module", ->
  module = null

  beforeEach ->
    module = angular.module "app"
    return

  it "should be registred", ->
    expect(module).not.toEqual null
    return

  describe "Dependances: ", ->

    deps = null
    hasModule = (m)->
      deps.indexOf(m) >= 0

    beforeEach ->
      deps = module
        .value 'app'
        .requires

    it "should have ngMaterial dependancy", ->
      expect hasModule 'ngMaterial'
        .toEqual true
      return

    it "should have routes dependancy", ->
      expect hasModule 'routes'
        .toEqual true
      return

    it "should have ucfirstFilter dependancy", ->
        expect hasModule "ucfirstFilter"
          .toEqual true
        return
    return

  return