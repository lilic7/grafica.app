describe "error.service", ->
  ErrorService = null

  beforeEach module "error.service"

  beforeEach inject (_ErrorService_)->
    ErrorService = _ErrorService_
    return

  it "should exists", ->
    expect ErrorService
      .toBeDefined()
    return

  it "should NOT be NULL", ->
    expect ErrorService
      .not
      .toBeNull()
    return

  describe "setMessage", ->
    it "DONT set message if msgCode does NOT exist in messages object", ->
      ErrorService.setMessage "KEY_NOT_EXIST"
      expect ErrorService.getMessage()
        .toEqual ""
      return
    it "should set message if msgCode exists in messages object", ->
      ErrorService.setMessage "WRONG_MATCH_NAME"
      expect ErrorService.getMessage()
        .toEqual "Acest tip de meci nu exista"
      return
    return

  describe "getMessage", ->
    it "should get message", ->
      expect ErrorService.getMessage()
        .toBeDefined()
      return
    return
  return