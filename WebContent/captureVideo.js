let angle = 0;
let delta = 0.003;
let cam;


function setup() {
  createCanvas(640, 480, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(320,240);
  cam.hide();
}

function draw() {
  background(175);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  noStroke();
  texture(cam);
  box(150);
  angle += delta;
  if (mouseIsPressed){
    if(delta == 0){
      delta = 0.03;
    }else{
      delta = 0;
    }
  }
}