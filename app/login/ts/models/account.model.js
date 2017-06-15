"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account() {
    }
    Account.prototype.validate = function (createNewAccount) {
        var val = true;
        if ((this._salutation != 'Frau' && this._salutation != 'Herr') || (this.isEmpty(this._firstName)) ||
            (this.isEmpty(this._lastName)) || (this.isEmpty(this._streetName)) || (this.isEmpty(this._zipCode)) ||
            (this.isEmpty(this._cityName))) {
            val = false;
        }
        if (createNewAccount) {
            if ((this.isEmpty(this._userName)) || (this.isEmpty(this._password))) {
                val = false;
            }
        }
        return val;
    };
    Account.prototype.isEmpty = function (value) {
        return (!value || value.trim().length == 0);
    };
    Account.prototype.flush = function () {
        this._id = -1;
        this._salutation = "";
        this._firstName = "";
        this._lastName = "";
        this._streetName = "";
        this._zipCode = "";
        this._cityName = "";
        this._userName = "";
        this._password = "";
    };
    Object.defineProperty(Account.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "salutation", {
        get: function () {
            return this._salutation;
        },
        set: function (value) {
            this._salutation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "streetName", {
        get: function () {
            return this._streetName;
        },
        set: function (value) {
            this._streetName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        set: function (value) {
            this._zipCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "cityName", {
        get: function () {
            return this._cityName;
        },
        set: function (value) {
            this._cityName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.model.js.map