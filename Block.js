class Block {
  constructor(x, y) {
    var options = {
      'friction': 0.05,
      'restitution': 0.05
    }
    this.body = Bodies.rectangle(x, y, 25, 25, options);
    this.width = 25;
    this.height = 25;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(random(0, 225), random(0, 225), random(0, 225));
    strokeWeight(2);
    stroke("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}