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
var http_1 = require("@angular/http");
var user_auth_dto_model_1 = require("../../../data-transfer-objects/user-auth-dto.model");
var user_dto_model_1 = require("../../../data-transfer-objects/user-dto.model");
var router_1 = require("@angular/router");
var account_model_1 = require("..//models/account.model");
var cart_model_1 = require("../../../cart/ts/models/cart.model");
var AuthService = (function () {
    function AuthService(http, _cart, _account, _router) {
        this.http = http;
        this._cart = _cart;
        this._account = _account;
        this._router = _router;
    }
    AuthService.prototype.login = function (email, passwd) {
        console.log("Try to login with Emailadress: " + email + " AND password: " + passwd);
        var endpoint_url = "http://localhost:8080/http/login";
        var userAuthDto = new user_auth_dto_model_1.UserAuthDto(email, passwd);
        var body = JSON.stringify(userAuthDto);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(endpoint_url, body, options).map(function (res) { return res.json(); }).map(function (data) { return user_dto_model_1.UserDto.fromJson(data); })
            .do(function (res) { return console.log(res); }).do(function (res) {
            if (res.authToken.success) {
                localStorage.setItem('auth_token', res._authToken.token);
                console.log("Login erfolgreich: this.loggedIn = " + res.authToken.success);
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this._cart.flush();
        this._account.flush();
        this._router.navigate(['']);
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('auth_token');
        return token != null && token.length > 0;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, cart_model_1.Cart, account_model_1.Account, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map