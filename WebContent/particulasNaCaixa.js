//Random Walk
let particles = [];
let number = 10000;


function setup() {
  createCanvas(500, 500);
  //Cria particulas em posicoes aleatorias
  while (particles.length < number) {
    let p = new Particle();
    particles.push(p);
    //console.log("numero de particulas = " + particles.length);
  }
}


function draw() {
  background(10);

  for (let i = 0; i < particles.length; i++) {
     
    particles[i].update();
    particles[i].show();
  }

}


class Particle {
  constructor() {
    this.x = random(0, 500);
    this.y = random(0, 500);
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.radius = random(2, 16);
    this.alpha = 225;
    this.color = random(10, 255);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.x < 0){
     this.vx = -this.vx;
    }
    if(this.x > 500){
     this.vx = -this.vx; 
    }
    
    if(this.y < 0){
     this.vy = -this.vy;
    }
    if(this.y> 500){
     this.vy = -this.vy; 
    }
  }


  show() {
    noStroke();
    fill(this.color, this.alpha);
    ellipse(this.x, this.y, this.radius)
  }

}
