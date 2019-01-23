//let cam;
let earthjpg;
let moonjpg;
let marsjpg;
let sunjpg;
let starsjpg;

function preload() {
  earthjpg = loadImage('earthcloud.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  marsjpg = loadImage('mars.jpg');
  sunjpg = loadImage('sun.jpg');
  starsjpg = loadImage('stars.jpg');
}

function setup() {
  createCanvas(1400, 750, WEBGL);

  //cam = createCamera();

}

function draw() {

  background(0);
  //directionalLight(255, 255, 255, 1, 0, 0)
  //pointLight(255,255,0,0,0,200);
  
  push();
  texture(sunjpg);
  rotateY(frameCount/280);
  sphere(80);
  pop();
  
  push();
  rotateY(frameCount / 500);
  translate(0, 0, -200);
  texture(earthjpg);
  sphere(40);

  rotateY(frameCount / 550);
  translate(0, 0, -58);
  texture(moonjpg);
  sphere(10);
  pop();


  push();
  rotateY(frameCount / 1000);
  translate(0, 0, -350);
  rotateY(frameCount / 400);
  texture(marsjpg);
  sphere();
  pop();

}
