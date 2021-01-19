var p1;
var e1,e2,e3,e4,e5,e6,e7,e8,eg,ebg;
var sq1,sq2,sq3,sq4,sq5;
var b1;
var pb,eb,pm,pt,pbg,exp;
var lc=0,life,life1;
var PLAY=1;
var END=0;
var gamestate=PLAY;
var home;
var gamestate2=1;





function preload(){
  f4u=loadImage("images/f4u.png");
  p51=loadImage("images/p51.png");
  bg=loadImage("images/bg.png");
  p1i=loadImage("images/p1.png");
exp=loadImage("images/exp.png");

  }

function setup() {
  createCanvas(800,800);
  p1 = createSprite(400, 400, 50, 50);
  p1.addImage(p1i);
 
  eg=new Group ();
  pbg=new Group ();
  ebg=new Group ();
 
  life1 = createSprite(400,780,400,5);
  life = createSprite(400,780,400,5);
  life1.shapeColor="red";
  life.shapeColor="yellow";
}

function draw() {
  background(bg);
 

 if(gamestate === PLAY){
  enemy ();

  p1.x=mouseX;
  p1.y=mouseY;

//if(gamestate===PLAY){
//  efire();
//}

if(keyDown("space")){
  fire();
}

if(pbg.isTouching(eg)){
  eg.destroyEach();
  pbg.destroyEach();
  }

  if(ebg.isTouching(p1)){
    
     lc=lc+1;
    life.width=life.width-2;
     }

     if(lc===100){
      gamestate=END;
      p1.lifetime=150;
        p1.addImage(exp);
   
       }





 }

 console.log(gamestate);
 console.log(lc);
 console.log(life.width);




  drawSprites();
 

 
  
       if(gamestate===END){
      
        textSize (32);
        fill("red");
     text("!/you died/!",300,400);

life.visible=false;





  }
  
}

function enemy () {
 if(frameCount%25===0){ 
   var rand = Math.round(random (200,600));
   e1 = createSprite(rand, -20, 90, 50);
   e1.velocityY=3;
   eg.add (e1);
   efire();
   e1.addImage(f4u)
   
 }
   if(frameCount%30===0){ 
    var rand = Math.round(random (10,200));
    e1 = createSprite(rand, -20, 90, 50);
    e1.velocityY=3;
    e1.velocityX=1;
    eg.add (e1);
    efire();
    e1.addImage(f4u)
 }
 if(frameCount%30===0){ 
  var rand = Math.round(random (10,200));
  e1 = createSprite(rand, -20, 90, 50);
  e1.velocityY=3;
  e1.velocityX=-1;
  eg.add (e1);
  efire();
  e1.addImage(f4u)
}

//function bomber


}

function bomber(){


  if(frameCount%200===0){ 
    var rand = Math.round(random (10,200));
    e1 = createSprite(rand, -20, 90, 50);
    //e1.velocityY=3;
    //e1.velocityX=-1;
  //  eg.add (e1);
   //...........00 efire();
    e1.addImage(f4u)
  }
}

function fire (){
  pb = createSprite(p1.x, p1.y, 2, 5);
pb.velocityY=-16;
pb.shapeColor="yellow";
pbg.add(pb);

}

function efire (){
  eb = createSprite(e1.x, e1.y, 2, 5);
eb.velocityY=16;
eb.shapeColor="yellow";
ebg.add(eb);

}