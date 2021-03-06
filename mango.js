class Mango{
    constructor(x, y,radius) {
        var options = {
            'isStatic' : true,
            'restitution' : 0,
            'friction': 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 50;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();
      }
}