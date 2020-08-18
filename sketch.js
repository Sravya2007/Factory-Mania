//variable declaration
var prodMachine;
var prodImg;
var belt1, belt2, belt3, belt4, belt5;
var beltExt3;
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
var messageImg;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  song.play();

  //creating all the sprites and assigning the values and properties
  
  waste = createSprite(width - 1420, height - 869);
  waste.addAnimation("bioImg", bioImg);
  waste.visible = false;

  prodMachine = createSprite(width - 1770, height - 569, 200, 750);
  prodMachine.addImage(prodImg);
  prodMachine.scale = 1;
  angleMode(DEGREES);
  prodMachine.rotation = 90;

  points = 0;

  belt1 = createSprite(width - 570, height - 869);
  belt1.addImage("beltImg", beltImg);
  belt1.scale = 1.5;

  belt2 = createSprite(width - 570, height - 719);
  belt2.addImage("beltImg", beltImg);
  belt2.scale = 1.5;

  belt3 = createSprite(width - 1320, height - 569);
  belt3.addImage("beltImg", beltImg);
  belt3.scale = 1.5;

  beltExt3 = createSprite(width - 570, height - 569);
  beltExt3.addImage("beltImg", beltImg);
  beltExt3.scale = 1.5;

  belt4 = createSprite(width - 570, height - 419);
  belt4.addImage("beltImg", beltImg);
  belt4.scale = 1.5;

  belt5 = createSprite(width - 570, height - 269);
  belt5.addImage("beltImg", beltImg);
  belt5.scale = 1.5;

  bin1 = createSprite(width - 220, height - 869, 210, 150);
  bin1.addImage("binImg", binImg1);
  bin1.scale = 0.8;
  bin1.setCollider("rectangle", -50, 0, 300, 200);

  bin2 = createSprite(width - 220, height - 719, 210, 150);
  bin2.addImage("binImg", binImg2);
  bin2.scale = 0.8;
  bin2.setCollider("rectangle", -50, 0, 300, 200);

  bin3 = createSprite(width - 220, height - 569, 210, 150);
  bin3.addImage("binImg", binImg3);
  bin3.scale = 0.8;
  bin3.setCollider("rectangle", -50, 0, 300, 200);

  bin4 = createSprite(width - 220, height - 419, 210, 150);
  bin4.addImage("binImg", binImg4);
  bin4.scale = 0.8;
  bin4.setCollider("rectangle", -50, 0, 300, 200);

  bin5 = createSprite(width - 220, height - 269, 210, 150);
  bin5.addImage("binImg", binImg5);
  bin5.scale = 0.8;
  bin5.setCollider("rectangle", -50, 0, 300, 200);

  openlid1 = createSprite(width - 220, 80);
  openlid1.visible = false;
  openlid1.addImage("openLid", openlid1Img);

  openlid2 = createSprite(width - 220, height - 739);
  openlid2.visible = false;
  openlid2.addImage("openLid", openlid2Img);

  openlid3 = createSprite(width - 220, height - 589);
  openlid3.visible = false;
  openlid3.addImage("openLid", openlid3Img);

  openlid4 = createSprite(width - 220, height - 439);
  openlid4.visible = false;
  openlid4.addImage("openLid", openlid4Img);

  openlid5 = createSprite(width - 220, height - 289);
  openlid5.visible = false;
  openlid5.addImage("openLid", openlid5Img);

  player = createSprite(width - 920, height - 569);
  player.visible = false;
  player.scale = 0.5;
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
    level = text("Level 1", width - 1420, height - 919);
  }

  if(points <= 20 && points >= 10) {
    noStroke();
    stroke(2);
    background(bg2);
    level = text("Level 2", width - 1420, height - 919);
  }

  if(points <= 30 && points > 20) {
    noStroke();
    stroke(2);
    background(bg3);
    level = text("Level 3", width - 1420, height - 919);
  }

  if(points <= 40 && points > 30) {
    noStroke();
    stroke(2);
    background(bg4);
    level = text("Level 4", width - 1420, height - 919);
  }

  if(points <= 50 && points > 40) {
    noStroke();
    stroke(2);
    background(bg5);
    level = text("Level 5", width - 1420, height - 919);
  }

  if(points > 50) {
    background(messageImg);
    fill("blue");
    level = text("Good Job!", width - 1820, height - 869);
    gameState = "Over";
    waste.velocityX = 0;
  }

  //condition for gameState to be over
  if(points < 0) {
    background(messageImg);
    gameState = "Over";
    textSize(40);
    fill("red");
    text("Sorry! Try again!", width - 1820, height - 869);
    waste.velocityX = 0;
  }

  if(gameState === "Start") {

    //condition for player to appear
    if((mouseX <= width - 920 && mouseX >= width - 1020 && mouseY >= height - 869 && mouseY <= height - 269) || (touches.length <= width - 920 && touches.length >= width - 1020)) {
      player.x = mouseX;
      player.y = mouseY;
      player.visible = true;
    }
 
    //condition for player to turn left and right
    if((mouseX < width - 1020 && mouseX > width - 1120) || (touches.length < width - 1020 && touches.length > width - 1120)) {
      player.addImage(playerImg);
      player.visible = true;
    } else if((mouseX < width - 920 && mouseX > width - 1020) || (touches.length < width - 920 && touches.length > width - 1020)){
      player.addImage(playerImg1);
      player.visible = true;
    }

    //conditions for assigning random images to the waste sprite and moving it
    if(frameCount === 100 ||wasteDestroy() === true) {     

      waste = createSprite(width - 1620, height - 569);
      waste.scale = 0.8;
      waste.velocityX = 6 + 3*points/5;
    
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
 
    //condition to get the label of the animation of the waste sprite
    anim = waste.getAnimationLabel();
  }

  //score conditions
  if(anim === "bioImg" && (waste.x >= width + 45 && waste.isTouching(bin1))) {
    points++;

  } else if((waste.x >= width + 45 && waste.isTouching(bin1)) && anim !== "bioImg"){    
    points = points - 1;
  }

  if(anim === "glassImg" && (waste.x >= width + 45 && waste.isTouching(bin2))) {  
    points++;

  } else if((waste.x >= width + 45 && waste.isTouching(bin2)) && anim !== "glassImg"){    
    points = points - 1;
  }

  if(anim === "metalImg" && (waste.x >= width + 45 && waste.isTouching(bin3))) {   
    points++;
    
  } else if((waste.x >= width + 45 && waste.isTouching(bin3)) && anim !== "metalImg"){     
    points = points - 1;
  }

  if(anim === "paperImg" && (waste.x >= width + 45 && waste.isTouching(bin4))) {   
    points++;

  } else if((waste.x >= width + 45 && waste.isTouching(bin4)) && anim !== "paperImg"){    
    points = points - 1;
  }

  if(anim === "plasticImg" && (waste.x >= width + 45 && waste.isTouching(bin5))) {    
    points++;

  } else if((waste.x >= width + 45 && waste.isTouching(bin5)) && anim !== "plasticImg"){    
    points = points - 1;
  }

  //conditions to make SURE the belt touches the dustbin
  if(waste.isTouching(belt1) && waste.y > height + 100 && waste.y <= height - 759) {
    waste.y = height - 869;
  }

  if(waste.isTouching(belt2) && waste.y > height - 759 && waste.y <= height - 609) {
    waste.y = height - 719;
  }

  if(waste.isTouching(beltExt3) && waste.y > height - 609 && waste.y <= height - 459) {
    waste.y = height - 569;
  }

  if(waste.isTouching(belt4) && waste.y > height - 459 && waste.y <= height - 309) {
    waste.y = height - 429;
  }

  if(waste.y > height - 309) {
    waste.y = height - 269;
  }

  drawSprites();

  //score display
  textSize(40);
  fill("white");
  text("Score:" + " " + points, width - 1820, height - 919);
}
}

//to carry the waste with the mouse till a limit
function touchMoved() {
  if(waste.x < width - 720) {
    waste.x = mouseX;
    waste.y = mouseY;
  }
}

//destroys the waste
function wasteDestroy() {
  if(waste.x > width - 220) {
    waste.visible = false;
  }
  if(waste.x >= width - 195) {
    waste.destroy();
    return true;
  } else {
    return false;
  }
}
