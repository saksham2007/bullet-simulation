var bullet,wall;
var speed,weight,thickness;

function setup(){

    createCanvas(1600,400)

bullet = createSprite(50,200,30,30);
bullet.shapeColor=color("white")
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80)

// car2 = createSprite(50,200,50,50);
// wall2 = createSprite(1500,200,60,height/2);
// wall2.shapeColor = color(80,80,80)

// car3 = createSprite(50,200,50,50);
// wall3 = createSprite(1500,200,60,height/2);
// wall3.shapeColor = color(80,80,80)

// car4 = createSprite(50,200,50,50);
// wall4 = createSprite(1500,200,60,height/2);
// wall4.shapeColor = color(80,80,80)

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet.velocityX = speed;


}


function draw(){
    background(0);

if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
    wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
    wall.shapeColor=color(0,225,0);
}
 }

hasCollided(bullet,wall);

drawSprites();

}

function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true;
    }
    return false;
}


