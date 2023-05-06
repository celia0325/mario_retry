// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let stage = 0;
let cnv;
let box;
let mario;

let jump = false;

function setup() {
  cnv = createCanvas(800, 500);
  centerCanvas()
  rectMode(CENTER);
  textAlign(CENTER);
  box = new Block();
  mario = new Mario();
  world.gravity.y = 10;

  mario = new Sprite();

mario.x = 400;
mario.y = 375;
mario.w = 30;
mario.h = 70;
}

function draw() {
  //gravity();
  if (stage === 0) {
    game();
  }
  world.gravity.y = 10;
}

function centerCanvas() {
  let w = (windowWidth - width) / 2;
  let h = (windowHeight-height) / 2;
  cnv.position(w, h);
}

function game() {
  background(130, 230, 250);
  noStroke();
  fill(100, 200, 75);
  rect(width/2, 450, width, 100);

  // frame
  noFill();
  stroke(0);
  strokeWeight(15);
  rect(width/2, height/2, width, height)

  //draw box
  stroke(0);
  strokeWeight(5);
  fill(255, 120, 0);
  rect(box.x, box.y, box.w, box.h)

  //draw mario
  stroke(0);
  fill(150, 0, 170);
  rect(mario.x, mario.y, mario.w, mario.h)

  mario_move()
}

class Mario {
  constructor() {
    this.x = 400;
    this.y = 375;
    this.w = 30;
    this.h = 70;
  }
}

class Block {
  constructor() {
    this.x = 200;
    this.y = 300;
    this.w = 200;
    this.h = 40;
  }
}

function mario_move() {
  if (kb.pressed("up")) {
    jump = true;
    mario.y-=16
    console.log(world.gravity.y)
  }
  else {
    jump = false;
    if (kb.pressing("right")) {
      mario.x+= 2;
    }
    if (kb.pressing("left")) {
      mario.x-= 2;
    }
  }
  
}