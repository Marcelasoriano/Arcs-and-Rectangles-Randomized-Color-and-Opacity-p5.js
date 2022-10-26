function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

let rot = 0;

function draw() {
  background(255);
  translate(2, 2);
  
  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 30; x++) {
      push();
      translate(x * 18, y * 18) //positioning
      rotate(rot / x * y);
      stroke(0.5);
      fill(random(200, 25), random(150, 45), random(170, 25), random(225, 250));
      arc(100, 100, 100, 100, 100, 100);
      rect(2, 2, 80, 20, PI); // position of object 
      pop();
      }
    }
    rot = rot + 0.01;
}
