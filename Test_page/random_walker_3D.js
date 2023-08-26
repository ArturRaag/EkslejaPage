var step=5;
let X=0;
let Y=0;
let Z=0;
let angle=0;
let bgColor 
let headingColor



function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}


function setup() {

  updateColors();

  canvas=createCanvas(windowWidth, windowHeight, WEBGL);
  tekst=createP("");
  tekst.position(100 ,1);
  tekst.style("color","white");
  tekst.style("font-size: 170px");

  let fov= PI/3;
  let cameraZ=(height/2.0)/tan(fov/2.0);
  perspective(fov, width/height, cameraZ/10000.0, cameraZ*10000);
}

function draw(){
  new_step();
  background(bgColor);
  stroke(headingColor);
  strokeWeight(3);
  // tekst.html("Eksleja ");
  rotateY(angle);
  rotateZ(angle*0.5);
  beginShape(POINTS);
  for (i=0;i<=empty_vec.length-1;i++){
    vertex(empty_vec[i].x,empty_vec[i].y, empty_vec[i].z);
}
  endShape();

// Compute the average position of all the points in the trail
avgPos = createVector(0, 0, 0);
for (let i = 0; i < empty_vec.length; i++) {
  avgPos.add(empty_vec[i]);
}
avgPos.div(empty_vec.length);

// Compute the camera position relative to the center of the trail
let cameraDist = 500; // Distance from the center of the trail
let cameraX = avgPos.x + cameraDist * sin(frameCount * 0.01); // Rotate around Y axis
let cameraY = avgPos.y + cameraDist * sin(frameCount * 0.005); // Rotate around Z axis
let cameraZ = avgPos.z + cameraDist * cos(frameCount * 0.01); // Rotate around Y axis

// Set the camera position and orientation
camera(cameraX, cameraY, cameraZ, avgPos.x, avgPos.y, avgPos.z, 0, 1, 0);


  //angle=angle+0.01;
  //camera(avgPos.x, avgPos.y, 300 - sin(frameCount * 0.001) * 200, 0, 0, 0, 0, 1, 0);
  if (empty_vec.length >=100000){
      empty_vec=[];
      X=0;
      Y=0;
      Z=0;
    }

}

empty_vec=[]
function new_step(){
  
    direction=random(["up","down","left","right","forward","back"]);
    if (direction=="up"){
      X=X+step;
    } else if (direction == "down"){
      X=X-step;
    } else if (direction=="left"){
      Y=Y-step;
    } else if (direction=="right"){
      Y=Y+step;
    } else if (direction=="forward"){
      Z=Z+step;
    } else if (direction=="back"){
      Z=Z-step;
    }
  vek=createVector(X,Y,Z);
  empty_vec.push(vek);
}



function updateColors() {
  const body = document.querySelector('body');
  const styles = window.getComputedStyle(body);
  bgColor = color(styles.backgroundColor); 

  const heading_col=document.querySelector('h1');
  const h2_style = window.getComputedStyle(heading_col);
  headingColor = color(h2_style.color);


  setTimeout(updateColors, 1);
  // update every second
}
