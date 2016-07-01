describe "ucfirstFilter", ->
  beforeEach module 'ucfirstFilter'

  describe "correct strings", ->
    ucfirst = null
    beforeEach inject ($filter)->
      ucfirst = $filter 'ucfirst', {}
      return

    it "should transform strings in ucfisrt format", ->
      expect ucfirst 'smalletter'
        .toBe 'Smalletter'
      expect ucfirst 'UPPERCASE'
        .toBe 'Uppercase'
      expect ucfirst 'two words'
        .toBe 'Two words'
      expect ucfirst 'OTHER WORDS'
        .toBe 'Other words'
      return
    return
  return