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
require("rxjs/Rx");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var cart_model_1 = require("../../../cart/ts/models/cart.model");
var response_dto_model_1 = require("../../../data-transfer-objects/response-dto.model");
var checkout_dto_model_1 = require("../../../data-transfer-objects/checkout-dto.model");
var account_model_1 = require("../../../login/ts/models/account.model");
var CheckoutService = (function () {
    function CheckoutService(http, _cart, _account) {
        this.http = http;
        this._cart = _cart;
        this._account = _account;
    }
    CheckoutService.prototype.checkout = function () {
        var checkoutDto = new checkout_dto_model_1.CheckoutDto();
        checkoutDto.cart = this._cart;
        checkoutDto.token = localStorage.getItem('auth_token');
        checkoutDto.account = this._account;
        var endpoint_url = "http://localhost:8080/http/checkout";
        var body = JSON.stringify(checkoutDto);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(endpoint_url, body, options)
            .map(function (res) { return res.json(); })
            .map(function (data) { return response_dto_model_1.ResponseDto.fromJson(data); });
    };
    return CheckoutService;
}());
CheckoutService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, cart_model_1.Cart, account_model_1.Account])
], CheckoutService);
exports.CheckoutService = CheckoutService;
//# sourceMappingURL=checkout.service.js.map