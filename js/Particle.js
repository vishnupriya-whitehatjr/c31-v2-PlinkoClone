class Particle {
    constructor(x, y) {
      
        this.body = Bodies.circle(x, y, 10);
        this.r = 20;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipseMode(RADIUS);
        ellipse(0, 0, 10,10);
        pop();
    }

};