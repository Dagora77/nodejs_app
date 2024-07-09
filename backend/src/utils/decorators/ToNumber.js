"use strict";
exports.__esModule = true;
exports.ToNumber = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var ToNumber = function () {
    return (0, class_transformer_1.Transform)(function (_a) {
        var value = _a.value;
        return ((0, class_validator_1.isNumberString)(value) ? Number(value) : value);
    });
};
exports.ToNumber = ToNumber;
