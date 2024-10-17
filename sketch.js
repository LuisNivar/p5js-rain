let drops = [];
const MAX_DROPS = 300;
const MAX_VELOCITY = 15;
const MIN_VELOCITY = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < MAX_DROPS; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  background(40);

  for(let i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].fall();
  }
}


