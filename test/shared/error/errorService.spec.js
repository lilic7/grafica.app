describe("error.service", function() {
  var ErrorService;
  ErrorService = null;
  beforeEach(module("error.service"));
  beforeEach(inject(function(_ErrorService_) {
    ErrorService = _ErrorService_;
  }));
  it("should exists", function() {
    expect(ErrorService).toBeDefined();
  });
  it("should NOT be NULL", function() {
    expect(ErrorService).not.toBeNull();
  });
  describe("setMessage", function() {
    it("DONT set message if msgCode does NOT exist in messages object", function() {
      ErrorService.setMessage("KEY_NOT_EXIST");
      expect(ErrorService.getMessage()).toEqual("");
    });
    it("should set message if msgCode exists in messages object", function() {
      ErrorService.setMessage("WRONG_MATCH_NAME");
      expect(ErrorService.getMessage()).toEqual("Acest tip de meci nu exista");
    });
  });
  describe("getMessage", function() {
    it("should get message", function() {
      expect(ErrorService.getMessage()).toBeDefined();
    });
  });
});
