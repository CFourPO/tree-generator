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


export default Point;






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
