import Point from './Point';

class MyCanvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor() {
        this.initCanvas();
    }

    initCanvas(): void {
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.height = 500;
        tmpCanvas.width = 500;
        tmpCanvas.id = "canvas";
        document.body.appendChild(tmpCanvas);

        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawLine(start: Point, end: Point) {
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(end.x, end.y);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "orange";
        this.ctx.stroke();
    }
}

export default MyCanvas;