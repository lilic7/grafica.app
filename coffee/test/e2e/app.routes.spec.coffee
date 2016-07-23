describe "e2e: Routes Module", ->

  beforeEach ->
    browser.get "http://grafica.app"
    return

  it "should go to fotbal page", ->
      browser.get "http://grafica.app/matches/fotbal"
      expect browser.getTitle()
        .toEqual "Grafica MdSport"
      return
  return