"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseDto = (function () {
    function ResponseDto(statusCode, statusCodeValue, statusMessage) {
        this._statusCode = statusCode;
        this._statusCodeValue = statusCodeValue;
        this._statusMessage = statusMessage;
    }
    Object.defineProperty(ResponseDto.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseDto.prototype, "statusCodeValue", {
        get: function () {
            return this._statusCodeValue;
        },
        set: function (value) {
            this._statusCodeValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseDto.prototype, "statusMessage", {
        get: function () {
            return this._statusMessage;
        },
        enumerable: true,
        configurable: true
    });
    ResponseDto.fromJson = function (data) {
        return new ResponseDto(data.statusCode, data.statusCodeValue, data.statusMessage);
    };
    return ResponseDto;
}());
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response-dto.model.js.map