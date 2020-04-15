// Create constants for Engine, World, etc.
const {Engine, World, Bodies, Body, Constraint} = Matter;

// Create all the global variables.
var engine, world;
var sling, ball;
var platform1, block1;
var flag = "ready";

function setup() {
    // Create the canvas and define values for 'engine' and 'world'.
    var canvas = createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    // Create the ball and slingshot
    ball = new Ball(100, 280, 15);
    sling = new Slingshot(ball.body, {x: 100, y: 270});

    // Create the platforms and blocks
    platform1 = new Platform(400, 360, 160, 15);
    block1 = new Block(350, 325);
    block2 = new Block(375, 325);
    block3 = new Block(400, 325);
    block4 = new Block(425, 325);
    block5 = new Block(450, 325);
    block6 = new Block(375, 300);
    block7 = new Block(400, 300);
    block8 = new Block(425, 300);
    block9 = new Block(400, 275);
    
    platform2 = new Platform(450, 170, 130, 15);
    block10 = new Block(425, 125);
    block11 = new Block(450, 125);
    block12 = new Block(475, 125);
    block13 = new Block(437.5, 100);
    block14 = new Block(462.5, 100);
    block15 = new Block(450, 75);
}

function draw() {
    // Set the background and update the Engine.
    background("black");
    Engine.update(engine);

    // Message to the viewer
    textSize(15);
    text("Drag and release to launch the ball.", 50, 160);
    text("Press SPACE to reload.", 85, 180);

    //Display all the elements.
    sling.display();
    ball.display();

    platform1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    
    platform2.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
}

function mouseDragged() {
    if (flag != "launched") {
        Body.setPosition(ball.body, {x: mouseX, y: mouseY});
        flag = "loading";
    }
}

function mousePressed() {
    if (flag != "loading" && flag != "launched") {
        Body.setPosition(ball.body, {x: mouseX, y: mouseY});
    }
}

function mouseReleased() {
    sling.release();
}

function keyPressed() {
    if (keyCode == 32 && flag == "launched") {
        World.remove(world, ball.body);
        ball = new Ball(100, 280, 15);
        sling = new Slingshot(ball.body, {x: 100, y: 270});
        flag = "ready";
    }
}