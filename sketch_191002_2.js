let posx = new Array(100);
let posy = new Array(100);
let radius = new Array(100);

let clicked = false;
let circleSize = 0;


function mousePressed() {
  clicked = !clicked;
}
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    rectMode(CENTER);
    for (let i=0; i<100; i++) {
      posx[i] = width / 2;
      posy[i] = height / 2;
    }
} 

  function draw() {
    background(255);
    circleSize = circleSize+0.03;

    for (let i=0; i<100; i++) {
      radius[i] = 150*(1.1 + sin(circleSize + i*0.1));
      if (i==0) {
        posx[i] = posx[i]+(mouseX - posx[i]);
        posy[i] = posy[i]+(mouseY - posy[i]);
      } else { 
        posx[i] = posx[i]+(posx[i-1] - posx[i])/5;
        posy[i] = posy[i]+(posy[i-1] - posy[i])/5;
      }


      for (let i=99; i>=0; i--) {
        fill(255-i*2, 0, i*2, 100);
        if (clicked==true) {
          noFill();
          stroke(255, i*10, i*i, 200);
          strokeWeight(0+i/5);
          beginShape();
          vertex(posx[i], posy[i]);
          bezierVertex(posx[i], posy[i], mouseX, mouseY, radius[i]/5, radius[i]*2);
          endShape();
        } else {
          noFill();
          stroke(2*i*2, 255, i*10, 200);
          strokeWeight(0+i*0.1);
          beginShape();
          vertex(posx[i], posy[i]);
          bezierVertex(posx[i]*2, posy[i]/2, radius[i]*3, radius[i], mouseX, mouseY);
          endShape();
        }
      }
    }
  }
