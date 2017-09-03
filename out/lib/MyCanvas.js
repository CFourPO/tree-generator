"use strict";
exports.__esModule = true;
var MyCanvas = /** @class */ (function () {
    function MyCanvas() {
        this.initCanvas();
    }
    MyCanvas.prototype.initCanvas = function () {
        var document = new HTMLDocument();
        var tmpCanvas = document.createElement("canvas");
        tmpCanvas.height = 500;
        tmpCanvas.width = 500;
        tmpCanvas.id = "canvas";
        document.body.appendChild(tmpCanvas);
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    };
    MyCanvas.prototype.drawLine = function (start, end) {
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(end.x, end.y);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "orange";
        this.ctx.stroke();
    };
    return MyCanvas;
}());
exports.MyCanvas = MyCanvas;
exports["default"] = MyCanvas;
