describe("ucfirstFilter", function() {
  beforeEach(module('ucfirstFilter'));
  describe("correct strings", function() {
    var ucfirst;
    ucfirst = null;
    beforeEach(inject(function($filter) {
      ucfirst = $filter('ucfirst', {});
    }));
    it("should transform strings in ucfisrt format", function() {
      expect(ucfirst('smalletter')).toBe('Smalletter');
      expect(ucfirst('UPPERCASE')).toBe('Uppercase');
      expect(ucfirst('two words')).toBe('Two words');
      expect(ucfirst('OTHER WORDS')).toBe('Other words');
    });
  });
});
