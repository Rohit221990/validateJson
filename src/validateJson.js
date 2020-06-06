const ValidateObj = require("./validateObj");

let valObjClass = new ValidateObj();
exports.validateJson = function (requestJson) {
  console.log(ValidateObj);
  var arrayOfResult = [];
  const response = valObjClass.checkJson(requestJson, arrayOfResult);
  return response;
};
