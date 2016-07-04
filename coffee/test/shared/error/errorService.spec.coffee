describe "error.service", ->
  ErrorService = null

  beforeEach ->
    angular
      .module "mokedService", []
      .service "$mdToast", {}
    angular.module "error.service", ["mokedService"]
    return

  beforeEach ->
    inject (_ErrorService_)->
      ErrorService = _ErrorService_
      return

    return

  it "should exists", ->
    expect ErrorService
      .toBeDefined()
    return

  return
