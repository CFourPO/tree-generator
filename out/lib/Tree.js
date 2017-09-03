"use strict";
exports.__esModule = true;
var MyNode_1 = require("./MyNode");
var MyCanvas_1 = require("./MyCanvas");
var Point_1 = require("./Point");
var Tree = /** @class */ (function () {
    function Tree(origin, config) {
        this.origin = origin || new MyNode_1["default"](new Point_1["default"](250, 0));
        this.config = config || null;
    }
    Tree.prototype.grow = function (length) {
        this.origin.grow(length);
    };
    Tree.prototype.getHtml = function () {
        var div = document.createElement("div");
        div.appendChild(this.origin.getHtml());
        document.body.appendChild(div);
    };
    Tree.prototype.draw = function () {
        this.canvas = new MyCanvas_1["default"]();
        this.origin.draw(this.canvas);
    };
    return Tree;
}());
exports["default"] = Tree;
