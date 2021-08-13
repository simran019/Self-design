var bgImg1,bgImg2;
var bgsprite1,bgsprite2;

var gamestate=0;
var formobject;
var playobject;

var database;

function preload(){
  bgImg1 = loadImage('homeScreen.jpg');
  bgImg2 = loadImage('bgimage1.jpg');
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-790,displayHeight-500);

  bgsprite1=createSprite(600,300,100,100);
  bgsprite1.addImage(bgImg1);
  bgsprite1.scale=0.3;
}

function draw() {
  background(bgImg1);

  if(gamestate===0)
  {
    
    formobject=new Form();
    formobject.display();
   // gamestate=1;
  }
  if(gamestate===1)
  {
    console.log("I am here");
    formobject.myhide();
    playobject=new Play();
    playobject.display();
    //var gs=formobject.gameState();
   //console.log(gs);
  
  
  }

 drawSprites();
        
}