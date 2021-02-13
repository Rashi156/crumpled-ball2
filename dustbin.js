 class Dustbin {
  constructor(x, y, height, width) {
    var options={
        isStatic: true
    }
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.image=loadImage("dustbingreen.png")
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    World.add(world, this.body);
}
display() {
    var pos = this.body.position;
    imageMode(CENTER);
    
    image(this.image,pos.x, pos.y, this.width, this.height);
}
    };
    

