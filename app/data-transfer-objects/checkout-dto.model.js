"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckoutDto = (function () {
    function CheckoutDto() {
    }
    Object.defineProperty(CheckoutDto.prototype, "cart", {
        get: function () { return this._cart; },
        set: function (value) { this._cart = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutDto.prototype, "token", {
        get: function () { return this._token; },
        set: function (value) { this._token = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutDto.prototype, "account", {
        set: function (value) {
            this._account = value;
        },
        enumerable: true,
        configurable: true
    });
    return CheckoutDto;
}());
exports.CheckoutDto = CheckoutDto;
//# sourceMappingURL=checkout-dto.model.js.map