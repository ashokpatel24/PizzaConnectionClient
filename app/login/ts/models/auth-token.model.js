"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthToken = (function () {
    function AuthToken(_success, _token) {
        this._success = _success;
        this._token = _token;
    }
    Object.defineProperty(AuthToken.prototype, "success", {
        get: function () {
            return this._success;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthToken.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    AuthToken.fromJson = function (data) {
        return new AuthToken(data.success, data.token);
    };
    return AuthToken;
}());
exports.AuthToken = AuthToken;
//# sourceMappingURL=auth-token.model.js.map