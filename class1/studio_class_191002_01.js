
let mx, my;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mx = width / 2;
  my = height / 2;
}

function draw() {
  mx = mx + (mouseX - mx)*0.3;
  my = my + (mouseY - my)*0.3;
  
  ellipse(mx, my, 100, 100);
}
