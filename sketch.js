var hr, mn, sc;
var clock,clockIMG;
function preload(){
  clockIMG = loadImage("clock.png");
}
function setup() {
  createCanvas(800,700);
  clock = createSprite(0,0,50,50);
  clock.addImage(clockIMG);
  clock.scale = 1.2;
}
function draw() {
  background(0);
  translate(350,300);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
  pop();
  hrAngle = map(hr,0,60,0,360);
  push();
    rotate(hrAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,100,0);
  pop();
  mnAngle = map(mn,0,60,0,360);
  push();
    rotate(mnAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,100,0);
  pop();
  clock.depth = 1;
  drawSprites();
}