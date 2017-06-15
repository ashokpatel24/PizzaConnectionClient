"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CartItem = (function () {
    function CartItem(_pizzaId, _price, _image, _size, _name) {
        this._pizzaId = _pizzaId;
        this._price = _price;
        this._image = _image;
        this._size = _size;
        this._name = _name;
        this._amount = 1;
    }
    Object.defineProperty(CartItem.prototype, "pizzaId", {
        get: function () { return this._pizzaId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItem.prototype, "price", {
        get: function () { return this._price; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItem.prototype, "image", {
        get: function () { return this._image; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItem.prototype, "size", {
        get: function () { return this._size; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItem.prototype, "amount", {
        get: function () { return this._amount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItem.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    CartItem.prototype.decreaseAmount = function () { return --this._amount; };
    CartItem.prototype.increaseAmount = function () { return this._amount++; };
    Object.defineProperty(CartItem.prototype, "subtotal", {
        get: function () { return this._amount * this._price; },
        enumerable: true,
        configurable: true
    });
    return CartItem;
}());
exports.CartItem = CartItem;
//# sourceMappingURL=cartitem.model.js.map