let x =0;
let c = [ 'red', 'blue', 'pink', 'green'];

function setup () {
  createCanvas(400,400);
  background(220);
  frameRate(10);
}

function draw () {
  let currentColor = c[frameCount % c.length]
  fill(currentColor)
  ellipse(x,200,50); //moves horizontally
  x+=2; //updates x by 2

    if(x>width){
      x=0; //reset circle when reaches edge
    }
   
  fill('black')
  text("current FPS:"+frameRate(), 30, 250)
  frameRate(60);
}