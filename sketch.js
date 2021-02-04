var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ch,chimg,chg,chs;
var sur,surimg;
var bc,bci,bcs;
var match,jad,jai;
var a,b,c,d;
var r,ri;
function preload(){
  chimg=loadImage("chappal.png");
  chs=loadSound("slap.wav");
  bcs=loadSound("Subway-Surfers-theme-song.mp3");
  ri=loadImage("re.png");
  surimg=loadImage("hii.gif");
  bci=loadImage("bc.gif");
}
function setup() {
 createCanvas(displayWidth,displayHeight);
bc=createSprite(700,400,10,10);
 bc.addImage("back",bci);
 bc.scale=4;
 sur=createSprite(30,100,10,10);
 sur.addImage("balak",surimg);
 sur.scale=0.25;
 chg = new Group();
  r=createSprite(300,100,10,10);
  r.addImage("reset",ri);
  r.scale=0.1;
  chg = new Group();
  bcs.play();
}
function draw() {
 background("skyblue");
  if(gameState === PLAY){
  r.visible = false;
     sc();
    
     if(chg.isTouching(sur)){
        gameState = END;
       chs.play();
  }
     if(keyDown(UP_ARROW)) {
    sur.velocityX = 0;
    sur.velocityY = -3;
       
  }
   
  
  if (keyDown(LEFT_ARROW)) {
   sur.velocityY = 0;
    sur.velocityX = -3;
  }
  
  
  
  if (keyDown(RIGHT_ARROW)) {
    sur.velocityX = 3;
    sur.velocityY = 0;
  } 
  
 
 
  if (keyDown(DOWN_ARROW)) {
    sur.velocityX =0;
    sur.velocityY =3;
  }
  }
      
         else if (gameState === END)
     {
      r.visible = true;
      chg.destroyEach();
      sur.visible=false;
      bc.visible=false;
     }
a=createSprite(1,100,10,200);
sur.bounceOff(a);
a.visible=false;
b=createSprite(600,100,10,200);
sur.bounceOff(b);
b.visible=false;
c=createSprite(300,0.2,3000,10); 
sur.bounceOff(c);
c.visible=false;
d=createSprite(300,200,3000,10); 
sur.bounceOff(d);
d.visible=false;
   if(mousePressedOver(r)) {
      reset();
    }
 drawSprites(); 
  }

 

function reset(){
  gameState=PLAY;
  r.visible=false;
  chg.destroyEach();
  r.scale=3;
  sur.y=100;
  sur.x=30;
  sur.velocityY=0;
  sur.velocityX=0;
  sur.visible=true;
  bc.visible=true;
 }
function sc()
 {
 if (frameCount % 50 === 0) {
    var ch = createSprite(600,300,10,10);
    ch.y = Math.round(random(10,200));
    ch.addImage(chimg);
    ch.scale = 0.020;
    ch.velocityX = -5;
    ch.lifetime=112;
   chg.add(ch);
 }
 }