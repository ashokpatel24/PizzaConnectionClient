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
var response_dto_model_1 = require("../../../data-transfer-objects/response-dto.model");
var account_dto_model_1 = require("../../../data-transfer-objects/account-dto.model");
var AccountCreatorService = (function () {
    function AccountCreatorService(http) {
        this.http = http;
    }
    AccountCreatorService.prototype.createAccount = function (account) {
        var endpoint_url = "http://localhost:8080/http/createaccount";
        var accountDto = this.mapAccount(account);
        var body = JSON.stringify(accountDto);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(endpoint_url, body, options).map(function (res) { return res.json(); }).map(function (data) { return response_dto_model_1.ResponseDto.fromJson(data); });
    };
    AccountCreatorService.prototype.mapAccount = function (value) {
        var accountDto = new account_dto_model_1.AccountDto();
        accountDto.salutation = value.salutation;
        accountDto.firstName = value.firstName;
        accountDto.lastName = value.lastName;
        accountDto.streetName = value.streetName;
        accountDto.zipCode = value.zipCode;
        accountDto.cityName = value.cityName;
        accountDto.userName = value.userName;
        accountDto.password = value.password;
        return accountDto;
    };
    return AccountCreatorService;
}());
AccountCreatorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountCreatorService);
exports.AccountCreatorService = AccountCreatorService;
//# sourceMappingURL=account-creator.service.js.map