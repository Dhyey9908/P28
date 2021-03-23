class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var ptB = this.pointB;
        strokeWeight(10);
        stroke("#3FE0D0");
        line(posA.x, posA.y, ptB.x, ptB.y);
        }
    }  
}