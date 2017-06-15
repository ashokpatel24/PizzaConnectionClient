"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserAuthDto = (function () {
    function UserAuthDto(_userName, _password) {
        this._userName = _userName;
        this._password = _password;
    }
    UserAuthDto.prototype.getuserName = function () { return this._userName; };
    Object.defineProperty(UserAuthDto.prototype, "password", {
        get: function () { return this._password; },
        set: function (value) { this._password = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserAuthDto.prototype, "userName", {
        set: function (value) { this._userName = value; },
        enumerable: true,
        configurable: true
    });
    return UserAuthDto;
}());
exports.UserAuthDto = UserAuthDto;
//# sourceMappingURL=user-auth-dto.model.js.map