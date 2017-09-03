"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y, config) {
        this.x = x;
        this.y = y;
        this.config = config || null;
    }
    Point.prototype.generateNextPoint = function (length) {
        var angle = Math.random() * (Math.PI);
        var dx = Math.cos(angle) * length;
        var dy = Math.sin(angle) * length;
        var point = new Point(Math.round(this.x + dx), Math.round(this.y + dy));
        console.log("\n            Length: " + length + " \n            Angle:  " + angle + " (" + angle * (180 / Math.PI) + ")\n            x:      " + point.x + " \n            y:      " + point.y);
        return point;
    };
    return Point;
}());
exports["default"] = Point;
// for (let i = 0; i < 10; i++) {
//     console.log(`Count ${i}:\n--------`);
//     for (let x = 0; x < 10; x++) {
//         console.log(`${x}) ${MyNode.generateWeightedBoolean(i)}`);
//     }
// }
// let origin = new MyNode(new Point(250, 250, {}), [], {});
// let tree = new Tree(origin, {});
// tree.grow(50);
// tree.grow(50);
// tree.grow(50);
// tree.grow(50);
// tree.grow(50);
// tree.grow(50);
// tree.getHtml();
// tree.draw();
