class Tree {

    public origin: MyNode;
      public config: any;
    public canvas: MyCanvas = new MyCanvas(500, 500);

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

class MyCanvas {
    height: number;
    width: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
        this.initCanvas();
    }

    initCanvas(height: number, width: number): void {
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.height = this.height;
        tmpCanvas.width = this.width;
        tmpCanvas.id = "canvas";
        document.body.appendChild(tmpCanvas);

        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawLine(start: Point, end: Point) {
        this.ctx.moveTo(start.x, (this.height - start.y));
        this.ctx.lineTo(end.x, (this.height - end.y));
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "orange";
        this.ctx.stroke();
    }
}

class MyNode {

    public point: Point;
    public nodes: MyNode[];
    public config: any;

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

    draw(canvas: MyCanvas) {
        if (this.nodes.length === 0) {
            return;
        }

        this.nodes.forEach((node: MyNode) => {
            canvas.drawLine(this.point, node.point);
            node.draw(canvas);
        })
    }
}

// for (let i = 0; i < 10; i++) {
//     console.log(`Count ${i}:\n--------`);
//     for (let x = 0; x < 10; x++) {
//         console.log(`${x}) ${MyNode.generateWeightedBoolean(i)}`);
//     }
// }


class Point {
    x: number;
    y: number;
    config: any;

    constructor(x: number, y: number, config?: any) {
        this.x = x;
        this.y = y;
        this.config = config || null;
    }


    generateNextPoint(length): Point {
        let angle = Math.random() * (Math.PI);
    
        let dx = Math.cos(angle) * length;
        let dy = Math.sin(angle) * length;

        let point = new Point(Math.round(this.x + dx), Math.round(this.y + dy));

        console.log(`
            Length: ${length} 
            Angle:  ${angle} (${angle * (180 / Math.PI)})
            x:      ${point.x} 
            y:      ${point.y}`);

        return point;
    }
}



let origin = new MyNode(new Point(250, 250, {}), [], {});
let tree = new Tree(origin, {});

tree.grow(50);
tree.grow(50);
tree.grow(50);
tree.grow(50);
tree.grow(50);
tree.grow(50);


tree.getHtml();

tree.draw();
