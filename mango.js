class mango{
    constructor(x,y,height, width)
    {
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.x=x;
        this.y=y;
        this.h=height;
        this.w = width;
        this.mango = loadImage("Images/mango.png");

        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
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
        rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.stone, pos.x, pos.y, pos.h, pos.w);
        pop();
    }
    
}