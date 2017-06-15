"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var animations_1 = require("@angular/platform-browser/animations");
var app_routes_1 = require("./app.routes");
var pizzalist_component_1 = require("./pizza/ts/components/pizzalist.component");
var http_1 = require("@angular/http");
var pizzalist_service_1 = require("./pizza/ts/services/pizzalist.service");
var pizzadetail_service_1 = require("./pizza/ts/services/pizzadetail.service");
var pizzadetail_component_1 = require("./pizza/ts/components/pizzadetail.component");
var cart_component_1 = require("./cart/ts/components/cart.component");
var checkout_component_1 = require("./checkout/ts/components/checkout.component");
var cart_model_1 = require("./cart/ts/models/cart.model");
var checkout_service_1 = require("./checkout/ts/services/checkout.service");
var order_option_component_1 = require("./order-option/ts/components/order-option.component");
var login_component_1 = require("./login/ts/components/login.component");
var auth_service_1 = require("./login/ts/services/auth.service");
var account_model_1 = require("./login/ts/models/account.model");
var confirmation_component_1 = require("./confirmation/ts/components/confirmation.component");
var account_creator_component_1 = require("./account-creator/ts/components/account-creator.component");
var account_creator_service_1 = require("./account-creator/ts/services/account-creator.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            primeng_1.InputTextModule,
            primeng_1.ButtonModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            app_routes_1.routing,
            primeng_1.MenubarModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            primeng_1.DataGridModule,
            primeng_1.PanelModule,
            primeng_1.DataListModule,
            primeng_1.GrowlModule,
            primeng_1.DataTableModule,
            primeng_1.DropdownModule],
        declarations: [app_component_1.AppComponent,
            pizzalist_component_1.PizzaListComponent,
            pizzadetail_component_1.PizzaDetailComponent,
            cart_component_1.CartComponent,
            checkout_component_1.CheckoutComponent,
            order_option_component_1.OrderOptionComponent,
            login_component_1.LoginComponent,
            confirmation_component_1.ConfirmationComponent,
            account_creator_component_1.AccountCreatorComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [pizzalist_service_1.PizzaListService,
            pizzadetail_service_1.PizzaDetailService,
            cart_model_1.Cart,
            checkout_service_1.CheckoutService,
            auth_service_1.AuthService,
            account_model_1.Account,
            account_creator_service_1.AccountCreatorService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map