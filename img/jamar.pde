PImage moon;

int[] xpos = new int[50]; 
int[] ypos = new int[50];

int rectX = 100;
int rectY = 100;

void setup() {
  size(200, 200);
  background(0,0,0);
  moon = loadImage("img/jamar.png");
  smooth();
  for (int i = 0; i < xpos.length; i ++ ) {
    xpos[i] = 0; 
    ypos[i] = 0;
  }
}

void draw() {
  background(255);
  
  // Shift array values
  for (int i = 0; i < xpos.length-1; i ++ ) {
    xpos[i] = xpos[i+1];
    ypos[i] = ypos[i+1];
  }
  
  // New location
  xpos[xpos.length-1] = mouseX; 
  ypos[ypos.length-1] = mouseY;
  
  // Draw everything
  for (int i = 0; i < xpos.length; i ++ ) {
    noStroke();
    fill(255-i*5);
    ellipse(xpos[i],ypos[i],i,i);
  }
  imageMode(CENTER);
  image(moon, rectX, rectY);
}

