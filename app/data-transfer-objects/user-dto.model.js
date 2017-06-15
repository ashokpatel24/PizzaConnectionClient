"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_token_model_1 = require("../login/ts/models/auth-token.model");
var UserDto = (function () {
    function UserDto(_id, _salutation, _firstName, _lastName, _streetName, _zipCode, _cityName, _userName, _password, success, token) {
        this._id = _id;
        this._salutation = _salutation;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._streetName = _streetName;
        this._zipCode = _zipCode;
        this._cityName = _cityName;
        this._userName = _userName;
        this._password = _password;
        this._authToken = new auth_token_model_1.AuthToken(success, token);
    }
    Object.defineProperty(UserDto.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "salutation", {
        get: function () {
            return this._salutation;
        },
        set: function (value) {
            this._salutation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "streetName", {
        get: function () {
            return this._streetName;
        },
        set: function (value) {
            this._streetName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        set: function (value) {
            this._zipCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "cityName", {
        get: function () {
            return this._cityName;
        },
        set: function (value) {
            this._cityName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "authToken", {
        get: function () {
            return this._authToken;
        },
        set: function (value) {
            this._authToken = value;
        },
        enumerable: true,
        configurable: true
    });
    UserDto.fromJson = function (data) {
        return new UserDto(data._id, data._salutation, data._firstName, data._lastName, data._streetName, data._zipCode, data._cityName, data._userName, data._password, data.authToken.success, data.authToken.token);
    };
    return UserDto;
}());
exports.UserDto = UserDto;
//# sourceMappingURL=user-dto.model.js.map