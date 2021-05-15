var Bg;
var BgImg;
var gameName;
var gameNameImg;
var story;
var storyImg;
var Ninja;
var NinjaImg;
var rules;
var rulesImg;
var Start;
var StartImg;
var gameOver;


function preload(){
  BgImg = loadImage("images/Background(1st).jpeg");
  gameNameImg = loadImage("images/GameName.png");
  storyImg = loadImage("images/GameStory.png");
  rulesImg = loadImage("images/rules.png");
  NinjaImg = loadImage("images/Ninja.png");
  StartImg = loadImage("images/Start.png");
  
  



}


function setup() {
  createCanvas(displayWidth,displayHeight);

  Bg = createSprite( displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Bg.addImage(BgImg);
  Bg.scale = 1.6;

  gameName = createSprite(650,50,10,10);
  gameName.addImage(gameNameImg);

  story = createSprite(250,160,10,10);
  story.addImage(storyImg);

  rules = createSprite(280,360,10,10);
  rules.addImage(rulesImg);

  Ninja = createSprite(1085,328,10,10);
  Ninja.addImage(NinjaImg);
  Ninja.scale = 0.80

  Start = createSprite(700,400,10,10);
  Start.addImage(StartImg)



}

function draw() {

  drawSprites();
}
