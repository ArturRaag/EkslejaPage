var init_X=[];
var init_Y=[];

var Xc;
var Yc;

var node_radius=5;
var nr_nodes=7; // since the first and last nodes merge, we need to N+1 for N-nurk.
var slicer=1;
var slicer_mark=1;

var X_start=150;
var Y_start=200;

var X_step=40;

var rot_angle=-1;
var new_points_to_rotate_X;
var new_points_to_rotate_Y;

var total_deg=0;

var tagged=false;

var toggle=false;

var change_occured=false;

function setup() {

  createCanvas(500, 400);
  stroke(255);
  
  Node_slider=createSlider(3,9,7,1);
  Node_slider.position(width/2-70,height);
  Node_slider.id('my-slider');
  Node_val=createP("");
  Node_val.position(width/2-10,height-50);
  Node_val.style("color: white; font-size: 24px");
  Node_val.id('my-slider_text');
  // CREATE ARRAYS, initX ja initY
  for (i=0; i<nr_nodes; i++){
    init_X.push(X_start);
    init_Y.push(Y_start);
    X_start=X_start+X_step;
  }
}


function draw() {
  // PAUS.mousePressed(pause_or_continute)
  background(0);
  Node_slider.input(check_slider);
  
  // console.log(change_occured)
  reset_joonis();
  Node_val.html(str(Node_slider.value()))
}

const rotatePoints = function (X_massiiv,Y_massiiv, centerX, centerY, nurk){
  praegune_X=[];
  praegune_Y=[];
  for (i=0; i<=X_massiiv.length-1; i++){
        temporary_X=(X_massiiv[i]-centerX)*Math.cos(nurk*Math.PI/180)-(Y_massiiv[i]-centerY)*Math.sin(nurk*Math.PI/180)+centerX;
        temporary_Y=(X_massiiv[i]-centerX)*Math.sin(nurk*Math.PI/180)+(Y_massiiv[i]-centerY)*Math.cos(nurk*Math.PI/180)+centerY;

      praegune_X.push(temporary_X);
      praegune_Y.push(temporary_Y);
  }
  return [praegune_X, praegune_Y]
}

function check_slider(){
  change_occured=true;
}

function reset_joonis(){
  
  if (change_occured==true){
    change_occured=false;
    
     init_X=[];
     init_Y=[];

     Xc;
     Yc;

     node_radius=5;
     nr_nodes=Node_slider.value(); // since the first and last nodes merge, we need to N+1 for N-nurk.
     slicer=1;
     slicer_mark=1;

     X_start=150;
     Y_start=200;

     X_step=40;

     rot_angle=-1;
     new_points_to_rotate_X;
     new_points_to_rotate_Y;

     total_deg=0;

     tagged=false;
     toggle=false;
    
    for (i=0; i<nr_nodes; i++){
    init_X.push(X_start);
    init_Y.push(Y_start);
    X_start=X_start+X_step;
  }
    
    }
  
    // DRAW THE NODES AND LINES---------------
  for (i=0; i<=init_X.length-1; i++){
    circle(init_X[i],init_Y[i],node_radius);
    if (i>=1){
      line(init_X[i-1], init_Y[i-1],init_X[i], init_Y[i])
    }
  }

  
  
  // DRAW THE NODES AND LINES---------------
  
  if (toggle==false){
  
  Xc=init_X[init_X.length-(slicer+1)];
  Yc=init_Y[init_Y.length-(slicer+1)];

  points_to_rotate_X=init_X.slice(init_X.length-slicer);
  points_to_rotate_Y=init_Y.slice(init_Y.length-slicer);


  new_points_to_rotate_X = rotatePoints(points_to_rotate_X, points_to_rotate_Y, Xc, Yc, rot_angle)[0];
  new_points_to_rotate_Y = rotatePoints(points_to_rotate_X, points_to_rotate_Y, Xc, Yc,rot_angle)[1];


  total_deg=total_deg+rot_angle;
 
    init_X.splice(init_X.length-slicer, slicer, ...new_points_to_rotate_X);
    init_Y.splice(init_Y.length-slicer, slicer, ...new_points_to_rotate_Y);


//     console.log(init_X.splice(init_X.length-slicer, slicer, ...new_points_to_rotate_X))
  if (abs(total_deg)>=180-((nr_nodes-2-1)*180)/(nr_nodes-1) ){
    total_deg=0;
    slicer=slicer+slicer_mark;
    if (slicer>=nr_nodes-1){
      slicer_mark=slicer_mark*(-1);
      rot_angle=rot_angle*(-1);
      slicer=slicer+slicer_mark;
    } else if (slicer<=0){

      slicer_mark=slicer_mark*(-1);
      rot_angle=rot_angle*(-1);
      slicer=slicer+slicer_mark;
    } 
  }

  }  
  
  
}
