"use strict";
exports.__esModule = true;
var MyNode = /** @class */ (function () {
    function MyNode(point, nodes, config) {
        this.point = point;
        this.nodes = nodes || [];
        this.config = config || null;
    }
    MyNode.prototype.grow = function (length) {
        var numChildren = this.nodes.length;
        if (numChildren > 0) {
            this.nodes.forEach(function (node) { return node.grow(length--); });
        }
        if (MyNode.shouldGrow(numChildren)) {
            var mtNode = new MyNode(this.point.generateNextPoint(length--));
            this.nodes.push(mtNode);
        }
    };
    // TODO: Factor in Tree node cound to determine how beginning nodes should grow
    // i.e. - if the Tree#grow() has been called 20 times, slow the rate of growth in 
    // child nodes.
    MyNode.shouldGrow = function (count) {
        var weight = Math.pow(Math.LN2, count);
        return Math.random() < weight;
    };
    MyNode.prototype.getHtml = function () {
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        li.innerText = "x: " + this.point.x + "   y: " + this.point.y;
        ul.appendChild(li);
        this.nodes.forEach(function (node) { return ul.appendChild(node.getHtml()); });
        return ul;
    };
    MyNode.prototype.draw = function (canvas) {
        var _this = this;
        if (this.nodes.length === 0) {
            return;
        }
        this.nodes.forEach(function (node) {
            canvas.drawLine(_this.point, node.point);
            node.draw(canvas);
        });
    };
    return MyNode;
}());
exports["default"] = MyNode;
