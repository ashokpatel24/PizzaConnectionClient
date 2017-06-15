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
var account_creator_service_1 = require("../services/account-creator.service");
var account_model_1 = require("../../../login/ts/models/account.model");
var auth_service_1 = require("../../../login/ts/services/auth.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var AccountCreatorComponent = (function () {
    function AccountCreatorComponent(_accountService, _authService, _router, _route, _account) {
        this._accountService = _accountService;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._account = _account;
        this.msgs = [];
        this._createNewAccount = false;
        if (this._route.snapshot.params['createNewAccount'] == 'true') {
            this._createNewAccount = true;
        }
    }
    AccountCreatorComponent.prototype.ngOnInit = function () {
        this.salutations = [];
        this.salutations.push({ label: 'Bitte wählen', value: '' });
        this.salutations.push({ label: 'Frau', value: 'Frau' });
        this.salutations.push({ label: 'Herr', value: 'Herr' });
    };
    AccountCreatorComponent.prototype.createAccount = function () {
        var _this = this;
        if (!this._account.validate(this._createNewAccount)) {
            this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie Ihre Eingabe!' });
        }
        else {
            this._accountService.createAccount(this._account).subscribe(function (res) {
                if (res.statusCode == 'OK') {
                    _this.msgs.push({ severity: 'info', summary: 'Aktion erfolgreich!', detail: 'Das Benutzerkonto wurde erstellt.' });
                    _this._authService.login(_this._account.userName, _this._account.password).subscribe(function (res) {
                        if (res.authToken.success == true) {
                            _this._account.id = res.id;
                            _this._router.navigate(['confirmation']);
                        }
                        else {
                            _this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Sie konnten nicht angemeldet werden.' });
                        }
                    });
                }
                else {
                    _this.msgs.push({ severity: 'error', summary: 'Fehler', detail: res.statusMessage });
                }
            });
        }
    };
    AccountCreatorComponent.prototype.orderDirect = function () {
        if (!this._account.validate(this._createNewAccount)) {
            this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie ihre Eingabe!' });
        }
        else {
            this._router.navigate(['confirmation']);
        }
    };
    Object.defineProperty(AccountCreatorComponent.prototype, "createNewAccount", {
        get: function () {
            return this._createNewAccount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountCreatorComponent.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: true,
        configurable: true
    });
    return AccountCreatorComponent;
}());
AccountCreatorComponent = __decorate([
    core_1.Component({
        selector: 'accountcreator',
        styleUrls: ['app/css/styles.css'],
        templateUrl: 'app/account-creator/templates/account-creator.html'
    }),
    __metadata("design:paramtypes", [account_creator_service_1.AccountCreatorService, auth_service_1.AuthService, router_1.Router,
        router_2.ActivatedRoute, account_model_1.Account])
], AccountCreatorComponent);
exports.AccountCreatorComponent = AccountCreatorComponent;
//# sourceMappingURL=account-creator.component.js.map