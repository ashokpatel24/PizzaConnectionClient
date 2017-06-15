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
var cart_model_1 = require("../../../cart/ts/models/cart.model");
var router_1 = require("@angular/router");
var CartComponent = (function () {
    function CartComponent(_router, _cart) {
        this._router = _router;
        this._cart = _cart;
    }
    CartComponent.prototype.checkout = function () {
        if (localStorage.getItem('auth_token') == null) {
            this._router.navigate(['orderoption']);
        }
        else {
            this._router.navigate(['confirmation']);
        }
    };
    Object.defineProperty(CartComponent.prototype, "sumtotal", {
        get: function () {
            return this._cart.sumtotal;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.decreaseItemAmount = function (item) {
        this._cart.decreaseItem(item);
    };
    CartComponent.prototype.increaseItemAmount = function (item) {
        this._cart.addItem(item);
    };
    CartComponent.prototype.removeItem = function (item) {
        this._cart.removeItem(item);
    };
    Object.defineProperty(CartComponent.prototype, "hasContent", {
        get: function () {
            return this._cart.getContent().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'cart',
        templateUrl: 'app/cart/templates/cart.html',
        styleUrls: ['app/css/styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, cart_model_1.Cart])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map