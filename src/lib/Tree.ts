import MyNode from './MyNode';
import MyCanvas from './MyCanvas';
import Point from './Point';

class Tree {

    origin: MyNode;
    config: any;
    canvas: MyCanvas;

    constructor(origin?: MyNode, config?: any) {
        this.origin = origin || new MyNode(new Point(250, 0));
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
        this.canvas = new MyCanvas();
        this.origin.draw(this.canvas);
    }
}

export default Tree;