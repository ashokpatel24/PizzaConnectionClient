"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pizza_routes_1 = require("./pizza/ts/routes/pizza.routes");
var cart_routes_1 = require("./cart/ts/routes/cart.routes");
var checkout_routes_1 = require("./checkout/ts/routes/checkout.routes");
var order_option_routes_1 = require("./order-option/ts/routes/order-option.routes");
var login_routes_1 = require("./login/ts/routes/login.routes");
var confirmation_routes_1 = require("./confirmation/ts/routes/confirmation.routes");
var account_creator_routes_1 = require("./account-creator/ts/routes/account-creator.routes");
exports.routes = pizza_routes_1.PizzaRoutes.concat(cart_routes_1.CartRoutes, checkout_routes_1.CheckoutRoutes, order_option_routes_1.OrderOptionRoutes, login_routes_1.LoginRoutes, confirmation_routes_1.ConfirmationRoutes, account_creator_routes_1.AccountCreatorRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map