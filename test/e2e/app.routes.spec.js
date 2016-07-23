describe("e2e: Routes Module", function() {
  beforeEach(function() {
    browser.get("http://grafica.app");
  });
  it("should go to fotbal page", function() {
    browser.get("http://grafica.app/matches/fotbal");
    expect(browser.getTitle()).toEqual("Grafica MdSport");
  });
});
