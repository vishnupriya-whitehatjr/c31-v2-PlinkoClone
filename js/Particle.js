class Particle {
    constructor(x, y) {

        var options ={
            restitution:0.8
        }
      
        this.body = Bodies.circle(x, y, 25,options);
        this.r = 20;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipseMode(RADIUS);
        ellipse(0, 0, 25,25);
        pop();
    }

};