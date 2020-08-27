//variable declaration
var prodMachine;
var prodImg;
var belt1, belt2, belt3, belt4, belt5;
var beltExt;
var beltImg;
var bin1, bin2, bin3, bin4, bin5;
var binImg1, binImg2, binImg3, binImg4, binImg5;
var bio, glass, metal, paper, plastic;
var bioImg, glassImg, metalImg, paperImg, plasticImg;
var rand, rand1, waste, waste1;
var openlid1, openlid2, openlid3, openlid4, openlid5;
var openlid1Img, openlid2Img, openlid3Img, openlid4Img, openlid5Img;
var player, playerImg, playerImg1;
var points;
var anim;
var gameState = "Start";
var level;
var bg1, bg2, bg3, bg4, bg5;
var song;
var messageImg, messageImg1;

//preloading all the images
function preload() {
  prodImg = loadImage("Images/Producing Machine.png");

  beltImg = loadImage("Images/Factory Belt 1.png");

  binImg1 = loadImage("Images/Bio Waste Bin.png");
  binImg2 = loadImage("Images/Glass Waste Bin.png");
  binImg3 = loadImage("Images/Metal Waste Bin.png");
  binImg4 = loadImage("Images/Paper Waste Bin.png");
  binImg5 = loadImage("Images/Plastic Waste Bin.png");

  bioImg = loadAnimation("Images/Organic Waste.png");
  glassImg = loadAnimation("Images/Glass Waste.png");
  metalImg = loadAnimation("Images/Metal Waste.png");
  paperImg = loadAnimation("Images/Paper Waste.png");
  plasticImg = loadAnimation("Images/Plastic Waste.png");

  openlid1Img = loadImage("Images/Bio Open Lid.png");
  openlid2Img = loadImage("Images/Glass Open Lid.png");
  openlid3Img = loadImage("Images/Metal Open Lid.png");
  openlid4Img = loadImage("Images/Paper Open Lid.png");
  openlid5Img = loadImage("Images/Plastic Open Lid.png");

  playerImg = loadImage("Images/PlayerImg.png");
  playerImg1 = loadImage("Images/playerImg1.png");

  bg1 = loadImage("Images/FactoryBG1.jpg");
  bg2 = loadImage("Images/FactoryBG2.jpg");
  bg3 = loadImage("Images/FactoryBG3.jpg");
  bg4 = loadImage("Images/FactoryBG4.jpg");
  bg5 = loadImage("Images/FactoryBG5.jpg");

  song = loadSound("Sounds/acousticGuitar.mp3");

  messageImg = loadImage("Images/messageImage.jpg"); 
  messageImg1 = loadImage("Images/messageImage1.jpg"); 
}

function setup() {
  createCanvas(100, 100);
  windowResized();

  song.play();

  //creating all the sprites and assigning the values and properties
  
  waste = createSprite(500, 100);
  waste.addAnimation("bioImg", bioImg);
  waste.visible = false;

  belt1 = createSprite(windowWidth/2 + 500, windowHeight/2 - 350);
  belt1.addImage("beltImg", beltImg);
  belt1.scale = windowWidth/1200;

  belt2 = createSprite(belt1.x, belt1.y + 150);
  belt2.addImage("beltImg", beltImg);
  belt2.scale = windowWidth/1200;

  belt3 = createSprite(belt1.x, belt2.y + 150);
  belt3.addImage("beltImg", beltImg);
  belt3.scale = windowWidth/1200;

  prodMachine = createSprite(windowWidth/2 - 700, belt3.y);
  prodMachine.addImage(prodImg);
  prodMachine.scale = windowWidth/1200;
  angleMode(DEGREES);
  prodMachine.rotation = 90;

  points = 0;

  beltExt = createSprite(windowWidth/2 - 300, belt3.y);
  beltExt.addImage("beltImg", beltImg);
  beltExt.scale = windowWidth/1200;
  prodMachine.depth = beltExt.depth + 1;

  belt4 = createSprite(belt1.x, belt3.y + 150);
  belt4.addImage("beltImg", beltImg);
  belt4.scale = windowWidth/1200;

  belt5 = createSprite(belt1.x, belt4.y + 150);
  belt5.addImage("beltImg", beltImg);
  belt5.scale = windowWidth/1200;

  bin1 = createSprite(belt1.x + 365, belt1.y);
  bin1.addImage("binImg", binImg1);
  bin1.scale = windowWidth/2500;

  bin2 = createSprite(belt1.x + 365, belt2.y);
  bin2.addImage("binImg", binImg2);
  bin2.scale = windowWidth/2500;

  bin3 = createSprite(belt1.x + 365, belt3.y);
  bin3.addImage("binImg", binImg3);
  bin3.scale = windowWidth/2500;

  bin4 = createSprite(belt1.x + 365, belt4.y);
  bin4.addImage("binImg", binImg4);
  bin4.scale = windowWidth/2500;

  bin5 = createSprite(belt1.x + 365, belt5.y);
  bin5.addImage("binImg", binImg5);
  bin5.scale = windowWidth/2500;

  openlid1 = createSprite(belt1.x + 365, belt1.y - 20);
  openlid1.visible = false;
  openlid1.addImage("openLid", openlid1Img);

  openlid2 = createSprite(belt1.x + 365, belt2.y - 20);
  openlid2.visible = false;
  openlid2.addImage("openLid", openlid2Img);

  openlid3 = createSprite(belt1.x + 365, belt3.y - 20);
  openlid3.visible = false;
  openlid3.addImage("openLid", openlid3Img);

  openlid4 = createSprite(belt1.x + 365, belt4.y - 20);
  openlid4.visible = false;
  openlid4.addImage("openLid", openlid4Img);

  openlid5 = createSprite(belt1.x + 365, belt5.y - 20);
  openlid5.visible = false;
  openlid5.addImage("openLid", openlid5Img);

  player = createSprite(beltExt.x + 400, beltExt.y);
  player.visible = false;
  player.scale = windowWidth/3000;
}

function draw() {
  //text properties for level
  textSize(40);
  fill("white");

  //conditions for changing the background based on the levels
  if(points <= 9 && points >= 0) {
    //making the backgroud as an image
    background(bg1);
    noStroke();
    stroke(2);
    level = text("Level 1", windowWidth/2 - 500, windowHeight/2 - 430);
  }

  if(points <= 20 && points >= 10) {
    noStroke();
    stroke(2);
    background(bg2);
    level = text("Level 2", windowWidth/2 - 500, windowHeight/2 - 430);
  }

  if(points <= 30 && points > 20) {
    noStroke();
    stroke(2);
    background(bg3);
    level = text("Level 3", windowWidth/2 - 500, windowHeight/2 - 430);
  }

  if(points <= 40 && points > 30) {
    noStroke();
    stroke(2);
    background(bg4);
    level = text("Level 4", windowWidth/2 - 500, windowHeight/2 - 430);
  }

  if(points <= 50 && points > 40) {
    noStroke();
    stroke(2);
    background(bg5);
    level = text("Level 5", windowWidth/2 - 500, windowHeight/2 - 430);
  }

  if(points > 50) {
    background(messageImg1);
    gameState = "Over";
    waste.velocityX = 0;
  }

  //condition for gameState to be over
  if(points < 0) {
    background(messageImg);
    gameState = "Over";
    textSize(40);
    waste.velocityX = 0;
  }

  if(gameState === "Start") {

    //condition for player to appear
    if(mouseX >= beltExt.x + 300 && mouseX <= beltExt.x + 500 && mouseY > belt1.y && mouseY < belt5.y) {
      player.x = World.mouseX;
      player.y = World.mouseY;
    }
 
    //condition for player to turn left and right
    if(mouseX < beltExt.x + 400 && mouseX > beltExt.x + 300) {
      player.addImage(playerImg);
      player.visible = true;
    } else if(mouseX < beltExt.x + 500 && mouseX > beltExt.x + 400){
      player.addImage(playerImg1);
      player.visible = true;
    }

    //conditions for assigning random images to the waste sprite and moving it
    if(frameCount === 100 ||wasteDestroy() === true) {     

      waste = createSprite(beltExt.y - 100, beltExt.y);
      waste.scale = windowWidth/2300;
      waste.velocityX = 6 + 3*points/5;
      prodMachine.depth = waste.depth + 1;
    
      rand = Math.round(random(1, 5));
      switch(rand) {
        case 1:
        waste.addAnimation("bioImg", bioImg);
        break;
  
        case 2:
        waste.addAnimation("glassImg", glassImg);
        break;  
  
        case 3:
        waste.addAnimation("metalImg", metalImg);
        break;
  
        case 4:
        waste.addAnimation("paperImg", paperImg);
        break;
  
        case 5:
        waste.addAnimation("plasticImg", plasticImg);
        break;
        
        default:
        break;
      }
 
    //condition to get the label of the animation of the waste sprite
    anim = waste.getAnimationLabel();
  }

  //condition for opening and closing the lids
    if(frameCount % 100 < 100 && frameCount % 100 > 5) {
      openlid1.visible = true;
      openlid2.visible = true;
      openlid3.visible = true;
      openlid4.visible = true;
      openlid5.visible = true;
    } else {
      openlid1.visible = false;
      openlid2.visible = false;
      openlid3.visible = false;
      openlid4.visible = false;
      openlid5.visible = false;
    }

  //score conditions
  if(anim === "bioImg" && (waste.x >= bin1.x - 50 && waste.isTouching(bin1))) {
    points++;

  } else if((waste.x >= bin1.x - 50 && waste.isTouching(bin1)) && anim !== "bioImg"){    
    points = points - 1;
  }

  if(anim === "glassImg" && (waste.x >= bin1.x - 50 && waste.isTouching(bin2))) {  
    points++;

  } else if((waste.x >= bin1.x - 50 && waste.isTouching(bin2)) && anim !== "glassImg"){    
    points = points - 1;
  }

  if(anim === "metalImg" && (waste.x >= bin1.x - 50 && waste.isTouching(bin3))) {   
    points++;
    
  } else if((waste.x >= bin1.x - 50 && waste.isTouching(bin3)) && anim !== "metalImg"){     
    points = points - 1;
  }

  if(anim === "paperImg" && (waste.x >= bin1.x - 50 && waste.isTouching(bin4))) {   
    points++;

  } else if((waste.x >= bin1.x - 50 && waste.isTouching(bin4)) && anim !== "paperImg"){    
    points = points - 1;
  }

  if(anim === "plasticImg" && (waste.x >= bin1.x - 50 && waste.isTouching(bin5))) {    
    points++;

  } else if((waste.x >= bin1.x - 50 && waste.isTouching(bin5)) && anim !== "plasticImg"){    
    points = points - 1;
  }

  //conditions to make SURE the belt touches the dustbin
  if(waste.isTouching(belt1) && waste.y > belt1.y - 500 && waste.y <= belt1.y + 100) {
    waste.y = belt1.y;
  }

  if(waste.isTouching(belt2) && waste.y > belt1.y + 100 && waste.y <= belt2.y + 100) {
    waste.y = belt2.y;
  }

  if(waste.isTouching(beltExt) && waste.y > belt2.y + 100 && waste.y <= beltExt.y + 100) {
    waste.y = beltExt.y;
  }

  if(waste.isTouching(belt3) && waste.y > belt2.y + 100 && waste.y <= belt3.y + 100) {
    waste.y = belt3.y;
  }

  if(waste.isTouching(belt4) && waste.y > belt3.y + 100 && waste.y <= belt4.y + 100) {
    waste.y = belt4.y;
  }

  if(waste.y > belt4.y + 100) {
    waste.y = belt5.y;
  }

  drawSprites();

  //score display
  textSize(40);
  fill("white");
  text("Score:" + " " + points, windowWidth/2 - 900, windowHeight/2 - 430);
}
}

//to carry the waste with the mouse till a limit
function touchMoved() {
  if(waste.x < belt1.y + 1100 && waste.x > belt1.y + 600) {
    waste.x = mouseX;
    waste.y = mouseY;
  }
}

//destroys the waste
function wasteDestroy() {
  if(waste.x > bin1.x - 15) {
    waste.visible = false;
  }
  if(waste.x >= bin1.x - 10) {
    waste.destroy();
    return true;
  } else {
    return false;
  }
}

//canvas will fit on any device
function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
}