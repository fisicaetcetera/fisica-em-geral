    //let cam;
    let earthjpg;
    function preload(){
      earthjpg = loadImage('earthmap1k.jpg');
      moonjpg = loadImage('moonmap1k.jpg');
    }

    function setup() {
    createCanvas(1000, 700, WEBGL);

    //cam = createCamera();

    }

    function draw() {

    background(0);
    directionalLight(255,255,110,0,0,-1)
    //pointLight(255,255,0,0,0,200);
    rotateY(frameCount/800);
    texture(moonjpg);
    sphere(250);
    
    translate(0,0,1533);
    texture(earthjpg);
    sphere(126);

    }
