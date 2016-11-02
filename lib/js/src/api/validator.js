"use strict";
const apierror_1 = require("./apierror");
class Validator {
    constructor() {
        this.errors = [];
    }
    hasErrors() {
        return (this.errors.length > 0);
    }
    toNumber(param, reason = "param invalid") {
        let result = Number(param);
        if (isNaN(result)) {
            this.errors.push(new apierror_1.ApiError(reason, "Bad Request"));
        }
        return result;
    }
    toStr(param, reason = "param invalid") {
        return String(param);
    }
    toDate(param, reason = "param invalid") {
        let result = new Date(param);
        if (!result) {
            this.errors.push(new apierror_1.ApiError(reason, "Bad Request"));
        }
        return result;
    }
    toUnixTimestamp(param, reason = "param invalid") {
        let result = new Date(param);
        if (!result) {
            this.errors.push(new apierror_1.ApiError(reason, "Bad Request"));
        }
        result = Math.floor(result.getTime() / 1000);
        return result;
    }
    assert(cond, reason) {
        if (!cond) {
            this.errors.push(new apierror_1.ApiError(reason, "Bad Request"));
        }
    }
}
exports.Validator = Validator;

//# sourceMappingURL=validator.js.map