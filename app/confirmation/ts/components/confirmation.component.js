"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var account_model_1 = require("../../../login/ts/models/account.model");
var cart_model_1 = require("../../../cart/ts/models/cart.model");
var checkout_service_1 = require("../../../checkout/ts/services/checkout.service");
var router_1 = require("@angular/router");
var ConfirmationComponent = (function () {
    function ConfirmationComponent(_checkoutService, _router, _cart, _account) {
        this._checkoutService = _checkoutService;
        this._router = _router;
        this._cart = _cart;
        this._account = _account;
        this.msgs = [];
    }
    Object.defineProperty(ConfirmationComponent.prototype, "Account", {
        get: function () {
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmationComponent.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmationComponent.prototype, "loggedIn", {
        get: function () {
            return this._account._id > 0;
        },
        enumerable: true,
        configurable: true
    });
    ConfirmationComponent.prototype.checkout = function () {
        var _this = this;
        this._checkoutService.checkout().subscribe(function (res) {
            if (res.statusCode == 'OK') {
                _this._cart.flush();
                _this._router.navigate(['checkout']);
            }
            else {
                _this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: res.statusMessage });
            }
        });
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    core_1.Component({
        selector: 'confirmation',
        templateUrl: 'app/confirmation/templates/confirmation.html',
        styleUrls: ['app/css/styles.css']
    }),
    __metadata("design:paramtypes", [checkout_service_1.CheckoutService, router_1.Router, cart_model_1.Cart, account_model_1.Account])
], ConfirmationComponent);
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map