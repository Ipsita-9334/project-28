class tree{
    constructor(x,y, width, height)
    {
        var options={
            isStatic: true
        }

        this.x=x;
        this.y=y;
        this.h=height;
        this.w = width;
        this.tree = loadImage("Images/tree.png");

        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.w, this.h);
        imageMode(CENTER);
        image(this.stone, pos.x, pos.y, pos.width, pos.height);
        pop();
    }
}