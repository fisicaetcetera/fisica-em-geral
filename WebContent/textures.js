let angle = 0;
let delta = 0.003;
let kitten;

function preload() {
  kitten = loadImage('sofia.jpg');
}

function setup() {
  createCanvas(300, 300, WEBGL);
}

function draw() {
  background(175);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  noStroke();
  texture(kitten);
  box(150);
  angle += delta;
  if (mouseIsPressed){
    if(delta == 0){
      delta = 0.003;
    }else{
      delta = 0;
    }
  }
}