const CheckCondition = require("./validateJson");

class ValidateObj {
  validObjAttribute = function (obj, arrayOfResult) {
    let keys = Object.keys(obj);
    keys.map(function (key) {
      switch (typeof key) {
        case "string":
          break;
        case "number":
          break;
        case "boolean":
          break;
        default:
          arrayOfResult.push(false);
      }
    });
    return arrayOfResult;
  };

  validObjValue = function (obj, arrayOfResult) {
    let values = Object.values(obj);
    var self = this;
    values.map(function (value) {
      if (value !== Infinity) {
        switch (typeof value) {
          case "string":
            break;
          case "number":
            break;
          case "object":
            if (value !== null) {
              self.validObjAttribute(value, arrayOfResult);
              self.validObjValue(value, arrayOfResult);
            }
            break;
          case "boolean":
            break;
          default:
            arrayOfResult.push(false);
        }
      } else {
        arrayOfResult.push(false);
      }
    });
    return arrayOfResult;
  };

  verifyJson(json, arrayOfResult) {
    this.validObjAttribute(json, arrayOfResult);
    this.validObjValue(json, arrayOfResult);
    if (arrayOfResult.includes(false)) {
      return false;
    }
    return true;
  }

  checkJson(json, arrayOfResult) {
    if (typeof json === "object") {
      return this.verifyJson(json, arrayOfResult);
    } else if (typeof json === "string") {
      JSON.parse(json);
      return this.verifyJson(json, arrayOfResult);
    } else {
      return false;
    }
  }
}

module.exports = ValidateObj;
