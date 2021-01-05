var joystickImage, joystick;
var stopImage, stopper, downarrow, downImage, rightarrow, rightImage, leftarrow, leftImage, uparrow, upImage;
var ball;
var edge1, edge2, edge3;
//creating line of bar
var line;
function preload() {

    joystickImage = loadImage("joystick.jpg");
    downImage = loadImage("down arrow.jpg");
    rightImage = loadImage("right arrow.jpg");
    leftImage = loadImage("left arrow.jpg");
    upImage = loadImage("up arrow.jpg");
    stopImage = loadImage("stopbutton.jpeg")
}
function setup() {
    createCanvas(360, 600);


    joystick = createSprite(100, 100);
    joystick.addImage(joystickImage);
    joystick.scale = 0.3;

    rightarrow = createSprite(100, 165, 15, 20);
    rightarrow.addImage(rightImage);
    rightarrow.scale = 0.7;

    uparrow = createSprite(155, 107, 20, 15)
    uparrow.addImage(upImage);
    uparrow.scale = 0.7;

    downarrow = createSprite(40, 107, 20, 15)
    downarrow.addImage(downImage);
    downarrow.scale = 0.7;
    stopper = createSprite(100, 105, 0, 0);
    stopper.addImage(stopImage);
    stopper.scale = 1;


    leftarrow = createSprite(100, 50, 20, 15)
    leftarrow.addImage(leftImage)
    leftarrow.scale = 0.7;

    line = createSprite(360, 290, 2, 625);
    line.shapeColor = "red"

    edge1 = createSprite(670, 600, 1350, 2);
    edge1.shapeColor = "red"

    edge2 = createSprite(0, 300, 2, 600);
    edge2.shapeColor = "red"

    edge3 = createSprite(660, 200, 1350, 2);
    edge3.shapeColor = "red"

    ball = createSprite(200, 300, 20, 20);
}

function draw() {
    background("white");
    createEdgeSprites();
    ball.bounceOff(line);
    ball.bounceOff(edge1);
    ball.bounceOff(edge2);
    ball.bounceOff(edge3);

    if (mousePressedOver(rightarrow)) {
        ball.velocityY = 2;
    }
    if (mousePressedOver(downarrow)) {
        ball.velocityX = -2;
        console.log("123");
    }
    if (mousePressedOver(leftarrow)) {
        ball.velocityY = -2
    }
    if (mousePressedOver(uparrow)) {
        ball.velocityX = 2
    }
    if (mousePressedOver(stopper)) {
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    console.log(mouseX)
    drawSprites();
}