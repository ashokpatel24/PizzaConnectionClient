"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cartitem_model_1 = require("./cartitem.model");
var Cart = (function () {
    function Cart() {
        this._content = new Array();
    }
    Cart.prototype.getContent = function () {
        return this._content;
    };
    Cart.prototype.flush = function () {
        this._content = new Array();
    };
    Object.defineProperty(Cart.prototype, "sumtotal", {
        get: function () {
            var sum = 0;
            this._content.forEach(function (item) {
                sum += item.subtotal;
            });
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Cart.prototype.addItem = function (item) {
        var cartItem = new cartitem_model_1.CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        var found = false;
        this._content.forEach(function (item) {
            if (item.pizzaId == cartItem.pizzaId) {
                item.increaseAmount();
                found = true;
                // Die gewählte Pizza war bereits im Warenkob, Anzahl wird um eins erhöht
            }
        });
        if (!found) {
            this._content.push(cartItem);
            // Die gewünschte Pizza war noch nicht im Warenkorb, wird mit Anzahl 1 eingefügt
        }
    };
    Cart.prototype.decreaseItem = function (item) {
        var cartItem = new cartitem_model_1.CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        for (var i = 0; i < this._content.length; i++) {
            if (this._content[i].pizzaId == cartItem.pizzaId) {
                if (this._content[i].decreaseAmount() == 0) {
                    this._content.splice(i, 1);
                }
            }
        }
    };
    Cart.prototype.removeItem = function (item) {
        var cartItem = new cartitem_model_1.CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        for (var i = 0; i < this._content.length; i++) {
            if (this._content[i].pizzaId == cartItem.pizzaId) {
                this._content.splice(i, 1);
            }
        }
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map