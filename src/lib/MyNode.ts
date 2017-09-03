import Point from './Point';
import MyCanvas from './MyCanvas';

class MyNode {

    // TODO: add attribute either in nodes[] or Point that provides easy reference to 

    point: Point;
    nodes: MyNode[];
    config: any;

    constructor(point: Point, nodes?: MyNode[], config?: any) {
        this.point = point;
        this.nodes = nodes || [];
        this.config = config || null;
    }

    grow(length): void {
        let numChildren: number = this.nodes.length;
        if (numChildren > 0) {
            this.nodes.forEach((node: MyNode) => node.grow(length--));
        }

        if (MyNode.shouldGrow(numChildren)) {
            let mtNode = new MyNode(this.point.generateNextPoint(length--));
            this.nodes.push(mtNode);
        }
    }

    // TODO: Factor in Tree node cound to determine how beginning nodes should grow
    // i.e. - if the Tree#grow() has been called 20 times, slow the rate of growth in 
    // child nodes.
    static shouldGrow(count) {
        let weight = Math.pow(Math.LN2, count);

        return Math.random() < weight;
    }

    getHtml() {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.innerText = `x: ${this.point.x}   y: ${this.point.y}`;
        ul.appendChild(li);
        this.nodes.forEach((node: MyNode) => ul.appendChild(node.getHtml()));

        return ul;
    }

    draw(canvas?: MyCanvas) {
        if (this.nodes.length === 0) {
            return;
        }

        this.nodes.forEach((node: MyNode) => {
            canvas.drawLine(this.point, node.point);
            node.draw(canvas);
        })
    }
}


export default MyNode;