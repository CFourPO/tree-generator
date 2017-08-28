import MyNode from './Node';
import MyCanvas from './MyCanvas';

class Tree {

    origin: MyNode;
    config: any;
    canvas: MyCanvas = new MyCanvas();

    constructor(origin: MyNode, config?: any) {
        this.origin = origin;
        this.config = config || null;
    }

    grow(length): void {
        this.origin.grow(length);
    }

    getHtml(): void {
        let div = document.createElement("div");
        div.appendChild(this.origin.getHtml());
        document.body.appendChild(div);
    }

    draw(): void {
        this.origin.draw(this.canvas);
    }
}