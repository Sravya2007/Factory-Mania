var prodMachine;
var prodImg;
var belt1, belt2, belt3, belt4, belt5;
var beltExt1, beltExt2, beltExt3, beltExt4, beltExt5;
var beltImg;
var bin1, bin2, bin3, bin4, bin5;
var binImg1, binImg2, binImg3, binImg4, binImg5;
var bio, glass, metal, paper, plastic;
var bioImg, glassImg, metalImg, paperImg, plasticImg;
var rand, rand1, waste;
var openlid1, openlid2, openlid3, openlid4, openlid5;
var openlid1Img, openlid2Img, openlid3Img, openlid4Img, openlid5Img;

function preload() {
  prodImg = loadImage("Images/Producing Machine.png");

  beltImg = loadImage("Images/Factory Belt 1.png");

  binImg1 = loadImage("Images/Bio Waste Bin.png");
  binImg2 = loadImage("Images/Glass Waste Bin.png");
  binImg3 = loadImage("Images/Metal Waste Bin.png");
  binImg4 = loadImage("Images/Paper Waste Bin.png");
  binImg5 = loadImage("Images/Plastic Waste Bin.png");

  bioImg = loadImage("Images/Organic Waste.png");
  glassImg = loadImage("Images/Glass Waste.png");
  metalImg = loadImage("Images/Metal Waste.png");
  paperImg = loadImage("Images/Paper Waste.png");
  plasticImg = loadImage("Images/Plastic Waste.png");

  openlid1Img = loadImage("Images/Bio Open Lid.png");
  openlid2Img = loadImage("Images/Glass Open Lid.png");
  openlid3Img = loadImage("Images/Metal Open Lid.png");
  openlid4Img = loadImage("Images/Paper Open Lid.png");
  openlid5Img = loadImage("Images/Plastic Open Lid.png");

}

function setup() {
  createCanvas(1800, 800);
  
  waste = createSprite(500, 100);
  waste.visible = false;

  prodMachine = createSprite(395, 400, 200, 750);
  prodMachine.addImage(prodImg);
  prodMachine.scale = 1.93;

  belt1 = createSprite(800, 100);
  belt1.addImage("beltImg", beltImg);
  belt1.scale = 1.5;

  beltExt1 = createSprite(1080, 100);
  beltExt1.addImage("beltImg", beltImg);
  beltExt1.scale = 1.5;

  belt2 = createSprite(800, 250);
  belt2.addImage("beltImg", beltImg);
  belt2.scale = 1.5;

  beltExt2 = createSprite(1080, 250);
  beltExt2.addImage("beltImg", beltImg);
  beltExt2.scale = 1.5;

  belt3 = createSprite(800, 400);
  belt3.addImage("beltImg", beltImg);
  belt3.scale = 1.5;

  beltExt3 = createSprite(1080, 400);
  beltExt3.addImage("beltImg", beltImg);
  beltExt3.scale = 1.5;

  belt4 = createSprite(800, 550);
  belt4.addImage("beltImg", beltImg);
  belt4.scale = 1.5;

  beltExt4 = createSprite(1080, 550);
  beltExt4.addImage("beltImg", beltImg);
  beltExt4.scale = 1.5;

  belt5 = createSprite(800, 700);
  belt5.addImage("beltImg", beltImg);
  belt5.scale = 1.5;

  beltExt5 = createSprite(1080, 700);
  beltExt5.addImage("beltImg", beltImg);
  beltExt5.scale = 1.5;

  bin1 = createSprite(1430, 100);
  bin1.addImage("binImg", binImg1);
  bin1.scale = 0.8;

  bin2 = createSprite(1430, 250);
  bin2.addImage("binImg", binImg2);
  bin2.scale = 0.8;

  bin3 = createSprite(1430, 400);
  bin3.addImage("binImg", binImg3);
  bin3.scale = 0.8;

  bin4 = createSprite(1430, 550);
  bin4.addImage("binImg", binImg4);
  bin4.scale = 0.8;

  bin5 = createSprite(1430, 700);
  bin5.addImage("binImg", binImg5);
  bin5.scale = 0.8;

  openlid1 = createSprite(1430, 80);
  openlid1.visible = false;
  openlid1.addImage("openLid", openlid1Img);

  openlid2 = createSprite(1430, 230);
  openlid2.visible = false;
  openlid2.addImage("openLid", openlid2Img);

  openlid3 = createSprite(1430, 380);
  openlid3.visible = false;
  openlid3.addImage("openLid", openlid3Img);

  openlid4 = createSprite(1430, 530);
  openlid4.visible = false;
  openlid4.addImage("openLid", openlid4Img);

  openlid5 = createSprite(1430, 680);
  openlid5.visible = false;
  openlid5.addImage("openLid", openlid5Img);
}

function draw() {
  background("Black");

  if(frameCount === 100|| wasteDestroy() === true) {
    waste = createSprite(500, 100);
    waste.scale = 0.8;
    //will change during adaptivity
    waste.velocityX = 3;

    rand = Math.round(random(1, 5));
    switch(rand) {
        case 1:
        waste.y = 100;
        break;
  
        case 2:
        waste.y = 250;
        break;
  
        case 3:
        waste.y = 400;
        break;
  
        case 4:
        waste.y = 550;
        break;
  
        case 5:
        waste.y = 700;
        break;
  
        default:
          break;
    }
  
    rand1 = Math.round(random(1, 5));
    switch(rand1) {
      case 1:
      waste.addImage("waste", bioImg);
      break;

      case 2:
      waste.addImage("waste1", glassImg);
      break;  

      case 3:
      waste.addImage("waste2", metalImg);
      break;

      case 4:
      waste.addImage("waste3", paperImg);
      break;

      case 5:
      waste.addImage("waste4", plasticImg);
      break;
      
      default:
      break;
    }

  } 
  
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

  drawSprites();
}

function mouseDragged() {
  if((waste.x <= 1430 && waste.x >= 500) && (waste.y > 0 && waste.y < 800)) {
    waste.x = mouseX;
    waste.y = mouseY;
  }
}

function wasteDestroy() {
  if(waste.x >= 1430) {
    waste.destroy();
    return true;
  } else {
    return false;
  }
}