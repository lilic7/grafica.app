describe("wordFirstFilter", function() {
  beforeEach(module('wordFirstFilter'));
  describe("Filter strings to WordFirst format", function() {
    var wordFirst;
    wordFirst = null;
    beforeEach(inject(function($filter) {
      wordFirst = $filter('wordFirst', {});
    }));
    it("should transform strings to Word First format", function() {
      expect(wordFirst("small letter string")).toBe("Small Letter String");
    });
  });
});
