class stone{
    constructor(x,y,r)
    {
        var options={
            isStatic: false,
            restitution: 0,
            friction:1,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.stone = loadImage("Images/stone.png");

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
        image(this.stone, pos.x, pos.y, this.r, this.r);
        pop();
    }
}