var knife,fruit,bomb,fruitGroup,bombGroup,score,randomFruit,position
var knifeImage,fruit1,fruit2,fruit3,fruit4,fruit5,bombImage,gameOverImage;
var gameOverSound,knifeSwoosh;

function preload(){
knifeImage=loadImage("assets/knife.png");
bombImage=loadImage("assets/bomb.jpg");
fruit1=loadImage('assets/apple.jpg');
fruit2=loadImage('assets/banana.jpg');
fruit3=loadImage('assets/mango.jpg');
fruit4=loadImage('assets/pineapple.jpg');
fruit5=loadImage('assets/orange.png');
backgroundImage=loadImage('assets/background.jpg');
}

function setup(){
    createCanvas(600,600);
    background=createSprite(250,350,800,800);
    background.addImage(backgroundImage);
    background.scale=4;

    // creating a knife
    knife=createSprite(40,200,20,20);
    knife.addImage(knifeImage);
    knife.scale=0.7
    knife.setCollider("rectangle",0,0,40,40);
    score=0;
    fruitGroup=createGroup();
    bombGroup=createGroup()
    
}
function draw(){
    knife.y=mouseY;
    knife.x=mouseX;
    drawSprites()
}
