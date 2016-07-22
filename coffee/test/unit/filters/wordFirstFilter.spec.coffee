describe "wordFirstFilter", ->
  beforeEach module 'wordFirstFilter'

  describe "Filter strings to WordFirst format", ->
    wordFirst = null
    beforeEach inject ($filter)->
      wordFirst = $filter 'wordFirst', {}
      return

    it "should transform strings to Word First format", ->
      expect wordFirst "small letter string"
        .toBe "Small Letter String"
      return
    return
  return