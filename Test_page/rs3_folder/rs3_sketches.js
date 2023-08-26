// ############################################################
// ############################################################
// ############### SKETCH 1: hero movement v1 #################
// ############################################################
// ############################################################

function setup() {
    createCanvas(600,400);
    charX=20;
    charY=height/2;
    
  }
  
  function draw() {
    background(220);
    
    circle(width/2,height/2,50);
    circle(charX,charY,10);
    
  }
  
  function mousePressed(){
    distX=mouseX-charX;
    distY=mouseY-charY;
    charX=charX+distX;
    charY=charY+distY;
  }

// ############################################################
// ############################################################
// ############### SKETCH 2: hero movement v2 #################
// ######################### Integrating the Dash mechanic ####
// ############################################################

var movementSpeed=5;
var isMouseHeld=false;
var finalX;
var finalY;
var magnitude;
var angleOfCharDeg;
var dashMagnitude=20;
var angleofCharRad;
var directionX;
var directionY;


function setup() {
  createCanvas(600,400);
  charX=20;
  charY=height/2;
  finalX=charX;
  finalY=charY;
  
}

function draw() {
  background(220);
  if (isMouseHeld) {
    finalX=mouseX;
    finalY=mouseY;
    distX=mouseX-charX;
    distY=mouseY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (!isMouseHeld && charX!=finalX && charY!=finalY){
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  }
    circle(width/2,height/2,50);
    circle(charX,charY,10);
  
   if (keyIsDown(32)) {
       directionX=mouseX-charX;
       directionY=mouseY-charY;
    if (((directionX)*(directionX)+(directionY)*(directionY))!=0){
     if (Math.sign(directionX)==-1){
       angleOfCharRad=(Math.atan(directionY/directionX))+Math.PI;
     } else{
       angleOfCharRad=(Math.atan(directionY/directionX))
     }
       dashX = Math.cos(angleOfCharRad);
       dashY = Math.sin(angleOfCharRad);
       scaledDashX=dashX*dashMagnitude;
       scaledDashY=dashY*dashMagnitude;
       charX=charX+scaledDashX;
       charY=charY+scaledDashY;
       finalX=charX;
       finalY=charY;
   }
   }
 
}

function mousePressed() {
  isMouseHeld = true;
}

function mouseReleased() {
  isMouseHeld = false;
}

function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}

// ############################################################
// ############################################################
// ############### SKETCH 3: hero movement v2 #################
// ######################### Adding dash cooldown #############
// ############################################################

var gameStartDelay=5000;
var delayStarted=new Date().getTime();
var canStartFight=false;

var baseMovementSpeed=5;
var movementSpeed=baseMovementSpeed;
var isMouseHeld=false;
var finalX;
var finalY;
var charX=20;
var charY=250;
var charR=10;
var magnitude;
var angleOfCharDeg;
var angleofCharRad;
var directionX;
var directionY;

var canPressDash=false;
var currentTime;
var lastPressTime=0;
var timeSinceLastPress;

var dashX;
var dashY;
var scaledDashX;
var scaledDashY;
var DashCooldown=5000;
var dashMagnitude=200;
var dashMovementSpeed=20;
var currentlyDashing=false;

var projectileSpeed=3;
var projectileAngle;
var bomb;




function setup() {
  createCanvas(600,400);
  charX=20;
  charY=height/2;
  finalX=charX;
  finalY=charY;
    window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Prevent the default behavior of the spacebar key
      event.preventDefault();
    }
  });
}

function draw() {
  background(245);
  
  charMovement();
  checkDashCD();
  if (keyIsDown(32) && canPressDash==true) {
        spaceBarDash();
   }
  
  abilityBarInterface();

}



function abilityBarInterface(){
    if(canPressDash==true){
    bar_col_1=color(0,255,0,125);
  } else{
    bar_col_1=color(255,0,0,125);
  }
  
  push();
  fill(bar_col_1);
  rect(40,height-50, 25,25);
  pop();
  
  text(dash_CD_text,50,height-35);
  text("SPACE to dash",20,height-10)
}

function spaceBarDash(){
      currentlyDashing=true;
      directionX=mouseX-charX;
      directionY=mouseY-charY;
    if (((directionX)*(directionX)+(directionY)*(directionY))!=0){
     if (Math.sign(directionX)==-1){
       angleOfCharRad=(Math.atan(directionY/directionX))+Math.PI;
     } else{
       angleOfCharRad=(Math.atan(directionY/directionX))
     }
       dashX = Math.cos(angleOfCharRad);
       dashY = Math.sin(angleOfCharRad);
      //final position where we have to arrive when we dash from our current position.
       finalDashDestinationX=charX+dashX*dashMagnitude; 
       finalDashDestinationY=charY+dashY*dashMagnitude;
       movementSpeed=dashMovementSpeed;
       scaledDashX=dashX*movementSpeed;
       scaledDashY=dashY*movementSpeed;
       charX=round_0(charX+scaledDashX);
       charY=round_0(charY+scaledDashY);
       finalX=round_0(finalDashDestinationX);
       finalY=round_0(finalDashDestinationY);
   }
   lastPressTime = new Date().getTime();
}


function checkDashCD(){
  currentTime = new Date().getTime();
  timeSinceLastPress = currentTime - lastPressTime;
    if (timeSinceLastPress>=DashCooldown){
        canPressDash=true;
        dash_CD_text="R";
      //console.log("can dash!"+str(timeSinceLastPress));
 } else{
   canPressDash=false;
   dash_CD_text=str(round_0(Math.abs(DashCooldown-timeSinceLastPress)/1000));
 //  console.log("CANT dash!"+str(timeSinceLastPress));

 }
}

function charMovement(){
  if (mouseX>=0 && mouseX<=width && mouseY<=height && mouseY>=0){
   
   if (isMouseHeld && currentlyDashing==true) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (isMouseHeld) {
      finalX=mouseX;
      finalY=mouseY;
       distX=mouseX-charX;
      distY=mouseY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (!isMouseHeld && ( (Math.abs(finalX-charX))>=movementSpeed || (Math.abs(charY-finalY))>=movementSpeed) ) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  }
  
  if (currentlyDashing==true){
      if (Math.abs(charY-finalDashDestinationY)<=movementSpeed && Math.abs(charX-finalDashDestinationX)<=movementSpeed ){
    movementSpeed=baseMovementSpeed;
    currentlyDashing=false;
  }
  }
}
    fill(0);
    circle(width/2,height/2,50);
    circle(charX,charY,charR);
  //console.log(charX,charY, finalX,finalY)
}

function mousePressed() {
    isMouseHeld = true;

}

function mouseReleased() {
  isMouseHeld = false;
}


function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}


// ############################################################
// ############################################################
// ############### SKETCH 4: Boss Mechanics ###################
// ######################### Adding Projectile class ##########
// ############################################################


var gameStartDelay=5000;
var delayStarted=new Date().getTime();
var canStartFight=false;

var baseMovementSpeed=5;
var movementSpeed=baseMovementSpeed;
var isMouseHeld=false;
var finalX;
var finalY;
var charX=20;
var charY=250;
var charR=10;
var magnitude;
var angleOfCharDeg;
var angleofCharRad;
var directionX;
var directionY;

var canPressDash=false;
var currentTime;
var lastPressTime=0;
var timeSinceLastPress;

var dashX;
var dashY;
var scaledDashX;
var scaledDashY;
var DashCooldown=5000;
var dashMagnitude=200;
var dashMovementSpeed=20;
var currentlyDashing=false;

var projectileSpeed=3;
var projectileAngle;
var bomb;



class bossAutoAttack{
  constructor(targetX,targetY){
    this.posX=width/2;
    this.posY=height/2;
  }
  
  update(targetX,targetY){
        this.aimX=targetX; // Lets find the vector/angle to know where to shoot.
    this.aimY=targetY;
    this.howFarX=this.aimX-this.posX;
    this.howFarY=this.aimY-this.posY;
    if(this.howFarX<0){
      this.projectileAngle=Math.atan(this.howFarY/this.howFarX)+Math.PI;
    } else{
          this.projectileAngle=Math.atan(this.howFarY/this.howFarX);
    }
    this.vektorX=Math.cos(this.projectileAngle);
    this.vektorY=Math.sin(this.projectileAngle);
    this.projectileMotionX=this.vektorX*projectileSpeed;
    this.projectileMotionY=this.vektorY*projectileSpeed;
    
    this.posX=this.posX+this.projectileMotionX;
    this.posY=this.posY+this.projectileMotionY;
    if ( Math.abs(this.posX-targetX)<=(charR/2) && Math.abs(this.posY-targetY)<=(charR/2) ){
      this.posX=targetX;
      this.posY=targetY;
      
    }
  }
  
  reveal(){
    circle(this.posX,this.posY,2);
  }
}













function setup() {
  createCanvas(600,400);
  charX=20;
  charY=height/2;
  finalX=charX;
  finalY=charY;
    window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Prevent the default behavior of the spacebar key
      event.preventDefault();
    }
  });
  bomb = new bossAutoAttack(charX,charY);
}

function draw() {
  checkStartDelayCD();
  background(245);
  
  charMovement();
  checkDashCD();
  if (keyIsDown(32) && canPressDash==true) {
        spaceBarDash();
   }
  
  abilityBarInterface();
  if( canStartFight==true){
    //TAKE SCREENSHOT OF CHARX CHARY WITH A FUNCTION AND USE THAT INSTEAD
    // SET A TIME INTERVAL FOR THE SCREENSHOT FUNCTION
    bomb.update(charX,charY);
    bomb.reveal();
  }
}









function checkStartDelayCD(){
  currentDelayTime = new Date().getTime();
  timeSinceLastDelayStarted = currentDelayTime - delayStarted;
    if ( timeSinceLastDelayStarted>=gameStartDelay){
      canStartFight=true;
      //console.log("can dash!"+str(timeSinceLastPress));
 } else{
   canStartFight=false;
 //  console.log("CANT dash!"+str(timeSinceLastPress));

 }
}




function abilityBarInterface(){
    if(canPressDash==true){
    bar_col_1=color(0,255,0,125);
  } else{
    bar_col_1=color(255,0,0,125);
  }
  
  push();
  fill(bar_col_1);
  rect(40,height-50, 25,25);
  pop();
  
  text(dash_CD_text,50,height-35);
  text("SPACE to dash",20,height-10)
}

function spaceBarDash(){
      currentlyDashing=true;
      directionX=mouseX-charX;
      directionY=mouseY-charY;
    if (((directionX)*(directionX)+(directionY)*(directionY))!=0){
     if (Math.sign(directionX)==-1){
       angleOfCharRad=(Math.atan(directionY/directionX))+Math.PI;
     } else{
       angleOfCharRad=(Math.atan(directionY/directionX))
     }
       dashX = Math.cos(angleOfCharRad);
       dashY = Math.sin(angleOfCharRad);
      //final position where we have to arrive when we dash from our current position.
       finalDashDestinationX=charX+dashX*dashMagnitude; 
       finalDashDestinationY=charY+dashY*dashMagnitude;
       movementSpeed=dashMovementSpeed;
       scaledDashX=dashX*movementSpeed;
       scaledDashY=dashY*movementSpeed;
       charX=round_0(charX+scaledDashX);
       charY=round_0(charY+scaledDashY);
       finalX=round_0(finalDashDestinationX);
       finalY=round_0(finalDashDestinationY);
   }
   lastPressTime = new Date().getTime();
}


function checkDashCD(){
  currentTime = new Date().getTime();
  timeSinceLastPress = currentTime - lastPressTime;
    if (timeSinceLastPress>=DashCooldown){
        canPressDash=true;
        dash_CD_text="R";
      //console.log("can dash!"+str(timeSinceLastPress));
 } else{
   canPressDash=false;
   dash_CD_text=str(round_0(Math.abs(DashCooldown-timeSinceLastPress)/1000));
 //  console.log("CANT dash!"+str(timeSinceLastPress));

 }
}

function charMovement(){
  if (mouseX>=0 && mouseX<=width && mouseY<=height && mouseY>=0){
   
   if (isMouseHeld && currentlyDashing==true) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (isMouseHeld) {
      finalX=mouseX;
      finalY=mouseY;
       distX=mouseX-charX;
      distY=mouseY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (!isMouseHeld && ( (Math.abs(finalX-charX))>=movementSpeed || (Math.abs(charY-finalY))>=movementSpeed) ) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  }
  
  if (currentlyDashing==true){
      if (Math.abs(charY-finalDashDestinationY)<=movementSpeed && Math.abs(charX-finalDashDestinationX)<=movementSpeed ){
    movementSpeed=baseMovementSpeed;
    currentlyDashing=false;
  }
  }
}
    fill(0);
    circle(width/2,height/2,50);
    circle(charX,charY,charR);
  //console.log(charX,charY, finalX,finalY)
}


function mousePressed() {
    isMouseHeld = true;

}

function mouseReleased() {
  isMouseHeld = false;
}




function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}


// ############################################################
// ############################################################
// ############### SKETCH 5: Boss Mechanics ###################
// ########## Finishing Boss projectile Basic attack ##########
// ############################################################


var gameStartDelay=3000;
var delayStarted=new Date().getTime();
var canStartFight=false;

var baseMovementSpeed=5;
var movementSpeed=baseMovementSpeed;
var isMouseHeld=false;
var finalX;
var finalY;
var charX=20;
var charY=250;
var charR=10;
var magnitude;
var angleOfCharDeg;
var angleofCharRad;
var directionX;
var directionY;

var canPressDash=false;
var currentTime;
var lastPressTime=0;
var timeSinceLastPress;

var dashX;
var dashY;
var scaledDashX;
var scaledDashY;
var DashCooldown=5000;
var dashMagnitude=100;
var dashMovementSpeed=20;
var currentlyDashing=false;

var projectileSpeed=3;
var projectileAngle;
var bomb;
var bombs=[];
var autoAttackInterval=1000;
var fadeInterval=autoAttackInterval*2;
var attackToggle=false;
var fadeToggle=false;
var previous;
var screenShotCharX=[];
var screenShotCharY=[];

var weGotHit=false;



class bossAutoAttack{
  constructor(targetX,targetY){
    this.posX=width/2;
    this.posY=height/2;
  }
  
  update(targetX,targetY){
    if ( Math.abs(this.posX-targetX)<=(charR/2) && Math.abs(this.posY-targetY)<=(charR/2) ){
      this.posX=targetX;
      this.posY=targetY;
    } else {
    this.aimX=targetX; // Lets find the vector/angle to know where to shoot.
    this.aimY=targetY;
    this.howFarX=this.aimX-this.posX;
    this.howFarY=this.aimY-this.posY;
    if(this.howFarX<0){
      this.projectileAngle=Math.atan(this.howFarY/this.howFarX)+Math.PI;
    } else{
          this.projectileAngle=Math.atan(this.howFarY/this.howFarX);
    }
    this.vektorX=Math.cos(this.projectileAngle);
    this.vektorY=Math.sin(this.projectileAngle);
    this.projectileMotionX=this.vektorX*projectileSpeed;
    this.projectileMotionY=this.vektorY*projectileSpeed;
    
    this.posX=this.posX+this.projectileMotionX;
    this.posY=this.posY+this.projectileMotionY;
    }
  }
  
  reveal(targetX,targetY){
    if (this.posX==targetX && this.posY==targetY){
      push();
      noStroke();
      fill(255,0,0,255/(fade_time_diff/100));
      circle(targetX, targetY, 25);
      pop();
    } else{
    push();
    fill(255,0,0);
    circle(this.posX,this.posY,5);
    pop();
    }
  }
  
  checkIfHit(targetX, targetY){
    if ( Math.abs(targetX-this.posX)<charR/2 && Math.abs(targetY-this.posY)<charR/2 ){
      text("You got detonated", width/2, 50);
      weGotHit=true;
      noLoop();
    }
  }
}













function setup() {
  createCanvas(600,400);
  charX=20;
  charY=height/2;
  finalX=charX;
  finalY=charY;
    window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Prevent the default behavior of the spacebar key
      event.preventDefault();
    }
  });
}

function draw() {
  checkStartDelayCD();
  background(245);
  
  checkDashCD();
  if (keyIsDown(32) && canPressDash==true) {
        spaceBarDash();
   }
  
  abilityBarInterface();
  projectileFadeTimer();
  autoAttackTrigger();
  if(canStartFight==true){
    //TAKE SCREENSHOT OF CHARX CHARY WITH A FUNCTION AND USE THAT INSTEAD
    // SET A TIME INTERVAL FOR THE SCREENSHOT FUNCTION
    for (var i=0; i<bombs.length;i++){
          bombs[i].update(screenShotCharX[i],screenShotCharY[i]);
          bombs[i].reveal(screenShotCharX[i],screenShotCharY[i]);
          bombs[i].checkIfHit(charX,charY);
    }
  }
  charMovement();
}








function projectileFadeTimer(){
  currentFadeTime = new Date().getTime();
  if (fadeToggle==false){
      previousFadeTime = new Date().getTime();
      fadeToggle=true;
  } else if (fadeToggle==true){
    fade_time_diff=Math.abs(currentFadeTime-previousFadeTime);
    if (fade_time_diff>=fadeInterval){
      fadeToggle=false;
    }
  }
}

function autoAttackTrigger(){
  current = new Date().getTime();
  if (attackToggle==false){
    Timer(); //gets previous time
  } else if (attackToggle==true){
    time_diff=Math.abs(current-previous);
    if (time_diff>=autoAttackInterval){
      screenShotCharXtemp=charX;
      screenShotCharYtemp=charY;
      screenShotCharX.push(screenShotCharXtemp);
      screenShotCharY.push(screenShotCharYtemp);
      bomb = new bossAutoAttack(screenShotCharXtemp,screenShotCharYtemp);
      bombs.push(bomb);
      if (bombs.length>2){
        bombs.shift();
        screenShotCharX.shift();
        screenShotCharY.shift();
        
      }
      attackToggle=false;
    }
  }
}

function Timer(){
  previous = new Date().getTime();
  attackToggle=true;
}






function checkStartDelayCD(){
  currentDelayTime = new Date().getTime();
  timeSinceLastDelayStarted = currentDelayTime - delayStarted;
    if ( timeSinceLastDelayStarted>=gameStartDelay){
      canStartFight=true;

 } else{
   canStartFight=false;


 }
}


function abilityBarInterface(){
    if(canPressDash==true){
    bar_col_1=color(0,255,0,125);
  } else{
    bar_col_1=color(255,0,0,125);
  }
  
  push();
  fill(bar_col_1);
  rect(40,height-50, 25,25);
  pop();
  
  text(dash_CD_text,50,height-35);
  text("SPACE to dash",20,height-10)
}

function spaceBarDash(){
      currentlyDashing=true;
      directionX=mouseX-charX;
      directionY=mouseY-charY;
    if (((directionX)*(directionX)+(directionY)*(directionY))!=0){
     if (Math.sign(directionX)==-1){
       angleOfCharRad=(Math.atan(directionY/directionX))+Math.PI;
     } else{
       angleOfCharRad=(Math.atan(directionY/directionX))
     }
       dashX = Math.cos(angleOfCharRad);
       dashY = Math.sin(angleOfCharRad);
      //final position where we have to arrive when we dash from our current position.
       finalDashDestinationX=charX+dashX*dashMagnitude; 
       finalDashDestinationY=charY+dashY*dashMagnitude;
       movementSpeed=dashMovementSpeed;
       scaledDashX=dashX*movementSpeed;
       scaledDashY=dashY*movementSpeed;
       charX=round_0(charX+scaledDashX);
       charY=round_0(charY+scaledDashY);
       finalX=round_0(finalDashDestinationX);
       finalY=round_0(finalDashDestinationY);
   }
   lastPressTime = new Date().getTime();
}


function checkDashCD(){
  currentTime = new Date().getTime();
  timeSinceLastPress = currentTime - lastPressTime;
    if (timeSinceLastPress>=DashCooldown){
        canPressDash=true;
        dash_CD_text="R";

 } else{
   canPressDash=false;
   dash_CD_text=str(round_0(Math.abs(DashCooldown-timeSinceLastPress)/1000));


 }
}

function charMovement(){
  if (mouseX>=0 && mouseX<=width && mouseY<=height && mouseY>=0){
   
   if (isMouseHeld && currentlyDashing==true) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (isMouseHeld) {
      finalX=mouseX;
      finalY=mouseY;
       distX=mouseX-charX;
      distY=mouseY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (!isMouseHeld && ( (Math.abs(finalX-charX))>=movementSpeed || (Math.abs(charY-finalY))>=movementSpeed) ) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  }
  
  if (currentlyDashing==true){
      if (Math.abs(charY-finalDashDestinationY)<=movementSpeed && Math.abs(charX-finalDashDestinationX)<=movementSpeed ){
    movementSpeed=baseMovementSpeed;
    currentlyDashing=false;
  }
  }
}
    fill(0);
    circle(width/2,height/2,50);
    circle(charX,charY,charR);

}


function mousePressed() {
    isMouseHeld = true;

}

function mouseReleased() {
  isMouseHeld = false;
}




function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}




// ############################################################
// ############################################################
// ############### SKETCH 6: Boss Mechanics ###################
// ##### Adding Boss Healthbar and character basic attack #####
// ############################################################


var gameStartDelay=3000;
var delayStarted=new Date().getTime();
var canStartFight=false;

var baseMovementSpeed=5;
var movementSpeed=baseMovementSpeed;
var isMouseHeld=false;
var finalX;
var finalY;
var charX=20;
var charY=250;
var charR=10;
var magnitude;
var angleOfCharDeg;
var angleofCharRad;
var directionX;
var directionY;

var canPressDash=false;
var currentTime;
var lastPressTime=0;
var timeSinceLastPress;

var dashX;
var dashY;
var scaledDashX;
var scaledDashY;
var DashCooldown=5000;
var dashMagnitude=100;
var dashMovementSpeed=20;
var currentlyDashing=false;

var projectileSpeed=3;
var projectileAngle;
var bomb;
var bombs=[];
var autoAttackInterval=1000;
var fadeInterval=autoAttackInterval*2;
var attackToggle=false;
var fadeToggle=false;
var previous;
var screenShotCharX=[];
var screenShotCharY=[];

var weGotHit=false;

var canPressQ=false;
var lastButtonQPressTime=0;
var characterButtonQSpeed=5;
var buttonQprojectiles=[]
var buttonQCooldown=1000;

var bossHealthBar=100;


class bossAutoAttack{
  constructor(targetX,targetY){
    this.posX=width/2;
    this.posY=height/2;
  }
  
  update(targetX,targetY){
    if ( Math.abs(this.posX-targetX)<=(charR/2) && Math.abs(this.posY-targetY)<=(charR/2) ){
      this.posX=targetX;
      this.posY=targetY;
    } else {
    this.aimX=targetX; // Lets find the vector/angle to know where to shoot.
    this.aimY=targetY;
    this.howFarX=this.aimX-this.posX;
    this.howFarY=this.aimY-this.posY;
    if(this.howFarX<0){
      this.projectileAngle=Math.atan(this.howFarY/this.howFarX)+Math.PI;
    } else{
          this.projectileAngle=Math.atan(this.howFarY/this.howFarX);
    }
    this.vektorX=Math.cos(this.projectileAngle);
    this.vektorY=Math.sin(this.projectileAngle);
    this.projectileMotionX=this.vektorX*projectileSpeed;
    this.projectileMotionY=this.vektorY*projectileSpeed;
    
    this.posX=this.posX+this.projectileMotionX;
    this.posY=this.posY+this.projectileMotionY;
    }
  }
  
  reveal(targetX,targetY){
    if (this.posX==targetX && this.posY==targetY){
      push();
      noStroke();
      fill(255,0,0,255/(fade_time_diff/100));
      circle(targetX, targetY, 25);
      pop();
    } else{
    push();
    fill(255,0,0);
    noStroke();
    circle(this.posX,this.posY,5);
    pop();
    }
  }
  
  checkIfHit(targetX, targetY){
    if ( Math.abs(targetX-this.posX)<charR/2 && Math.abs(targetY-this.posY)<charR/2 ){
      text("YOU TURNED TO DUST AN PERISHED!", width/2-100, 90);
      push();
      noStroke();
      fill(255,0,0,255/(fade_time_diff/100));
      circle(targetX, targetY, 25);
      pop();
      weGotHit=true;
      noLoop();
    }
  }
}

class buttonQAbility{
  constructor(myX,myY){
    this.posX=myX;
    this.posY=myY;
  }
  
  update(targetX,targetY){
    this.aimX=targetX; // Lets find the vector/angle to know where to shoot.
    this.aimY=targetY;
    this.howFarX=this.aimX-this.posX;
    this.howFarY=this.aimY-this.posY;
    if(this.howFarX<0){
      this.projectileAngle=Math.atan(this.howFarY/this.howFarX)+Math.PI;
    } else{
          this.projectileAngle=Math.atan(this.howFarY/this.howFarX);
    }
    this.vektorX=Math.cos(this.projectileAngle);
    this.vektorY=Math.sin(this.projectileAngle);
    this.projectileMotionX=this.vektorX*characterButtonQSpeed;
    this.projectileMotionY=this.vektorY*characterButtonQSpeed;
    this.posX=this.posX+this.projectileMotionX;
    this.posY=this.posY+this.projectileMotionY;
  }
  
  reveal(targetX,targetY){
    push();
    fill(0,255,0);
    noStroke();
    circle(this.posX,this.posY,5);
    pop();
  }
  
  checkIfBossHit(targetX,targetY){
  if ( Math.abs(this.posX-targetX)<=(charR/2) && Math.abs(this.posY-targetY)<=(charR/2) ){
      bossHealthBar=bossHealthBar-1;
      buttonQprojectiles.shift();
        }
  }
}  






function setup() {
  createCanvas(600,400);
  bossX=width/2;
  bossY=height/2;
  charX=20;
  charY=height/2;
  finalX=charX;
  finalY=charY;
    window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Prevent the default behavior of the spacebar key
      event.preventDefault();
    }
  });
}

function draw() {
  background(245);
  checkStartDelayCD();
  checkDashCD();
  checkButtonQCD();
  if (keyIsDown(32) && canPressDash==true){
        spaceBarDash();
   }
  
  abilityBarInterface();
  projectileFadeTimer();
  autoAttackTrigger();
  if(canStartFight==true){
    //TAKE SCREENSHOT OF CHARX CHARY WITH A FUNCTION AND USE THAT INSTEAD
    // SET A TIME INTERVAL FOR THE SCREENSHOT FUNCTION
    for ( i=0; i<bombs.length;i++){
          bombs[i].update(screenShotCharX[i],screenShotCharY[i]);
          bombs[i].reveal(screenShotCharX[i],screenShotCharY[i]);
          bombs[i].checkIfHit(charX,charY);
    }
    
      if (keyIsDown(81) && canPressQ==true){
         buttonQSkill();
   }
    for ( i=0; i<buttonQprojectiles.length;i++){
          buttonQprojectiles[i].update(bossX,bossY);
          buttonQprojectiles[i].reveal(bossX,bossY);
          buttonQprojectiles[i].checkIfBossHit(bossX,bossY);
    }
    
  }
  charMovement();
  bossHealthDraw();
}

function bossHealthDraw(){
  rect(width*0.3, 20, width*0.4 ,20);
  
  push();
  fill(255,0,0);
  rect(width*0.3, 20, (width*0.4)*(bossHealthBar/100) ,20);
  pop();
  if (bossHealthBar<=0){
    text("This creature shall trouble you no longer...",width/2-100, 90);
    noLoop();
  }
  
}


function projectileFadeTimer(){
  currentFadeTime = new Date().getTime();
  if (fadeToggle==false){
      previousFadeTime = new Date().getTime();
      fadeToggle=true;
  } else if (fadeToggle==true){
    fade_time_diff=Math.abs(currentFadeTime-previousFadeTime);
    if (fade_time_diff>=fadeInterval){
      fadeToggle=false;
    }
  }
}

function autoAttackTrigger(){
  current = new Date().getTime();
  if (attackToggle==false){
    Timer(); //gets previous time
  } else if (attackToggle==true){
    time_diff=Math.abs(current-previous);
    if (time_diff>=autoAttackInterval){
      screenShotCharXtemp=charX;
      screenShotCharYtemp=charY;
      screenShotCharX.push(screenShotCharXtemp);
      screenShotCharY.push(screenShotCharYtemp);
      bomb = new bossAutoAttack(screenShotCharXtemp,screenShotCharYtemp);
      bombs.push(bomb);
      if (bombs.length>2){
        bombs.shift();
        screenShotCharX.shift();
        screenShotCharY.shift();
        
      }
      attackToggle=false;
    }
  }
}

function Timer(){
  previous = new Date().getTime();
  attackToggle=true;
}




function checkStartDelayCD(){
  currentDelayTime = new Date().getTime();
  timeSinceLastDelayStarted = currentDelayTime - delayStarted;
    if ( timeSinceLastDelayStarted>=gameStartDelay){
      canStartFight=true;
 } else{
   canStartFight=false;
 }
}


function abilityBarInterface(){
  if(canPressDash==true){
    bar_col_1=color(0,255,0,125);
  } else{
    bar_col_1=color(255,0,0,125);
  }
  
  if(canPressQ==true){
    bar_col_2=color(0,255,0,125);
  } else{
    bar_col_2=color(255,0,0,125);
  }
  
  push();
  fill(bar_col_1);
  rect(40,height-50, 55,25);
  pop();
  
  text(dash_CD_text,50,height-35);
  text("Dash",55,height-10);
  
  
  push();
  fill(bar_col_2);
  rect(150,height-50, 25,25);
  pop();
  
  text(buttonQ_CD_text,158,height-35);
  text("Basic",150,height-10);
  
  
}

function buttonQSkill(){
  bossTargetX=width/2;
  bossTargetY=height/2;
  projectileQ = new buttonQAbility(charX,charY);
  buttonQprojectiles.push(projectileQ);
  lastButtonQPressTime = new Date().getTime();
}

function checkButtonQCD(){
  currentQTime = new Date().getTime();
  timeSinceLastQPress = currentQTime - lastButtonQPressTime;
    if (timeSinceLastQPress>=buttonQCooldown){
        canPressQ=true;
        buttonQ_CD_text="Q";
 } else{
   canPressQ=false;
   buttonQ_CD_text=str(round_0(Math.abs(buttonQCooldown-timeSinceLastQPress)/1000));
 }
}

function spaceBarDash(){
      currentlyDashing=true;
      directionX=mouseX-charX;
      directionY=mouseY-charY;
    if (((directionX)*(directionX)+(directionY)*(directionY))!=0){
     if (Math.sign(directionX)==-1){
       angleOfCharRad=(Math.atan(directionY/directionX))+Math.PI;
     } else{
       angleOfCharRad=(Math.atan(directionY/directionX))
     }
       dashX = Math.cos(angleOfCharRad);
       dashY = Math.sin(angleOfCharRad);
      //final position where we have to arrive when we dash from our current position.
       finalDashDestinationX=charX+dashX*dashMagnitude; 
       finalDashDestinationY=charY+dashY*dashMagnitude;
       movementSpeed=dashMovementSpeed;
       scaledDashX=dashX*movementSpeed;
       scaledDashY=dashY*movementSpeed;
       charX=round_0(charX+scaledDashX);
       charY=round_0(charY+scaledDashY);
       finalX=round_0(finalDashDestinationX);
       finalY=round_0(finalDashDestinationY);
   }
   lastPressTime = new Date().getTime();
}


function checkDashCD(){
  currentTime = new Date().getTime();
  timeSinceLastPress = currentTime - lastPressTime;
    if (timeSinceLastPress>=DashCooldown){
        canPressDash=true;
        dash_CD_text="SPACE";
 } else{
   canPressDash=false;
   dash_CD_text=str(round_0(Math.abs(DashCooldown-timeSinceLastPress)/1000));
 }
}

function charMovement(){
  if (mouseX>=0 && mouseX<=width && mouseY<=height && mouseY>=0){
   
   if (isMouseHeld && currentlyDashing==true) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (isMouseHeld) {
      finalX=mouseX;
      finalY=mouseY;
       distX=mouseX-charX;
      distY=mouseY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  } else if (!isMouseHeld && ( (Math.abs(finalX-charX))>=movementSpeed || (Math.abs(charY-finalY))>=movementSpeed) ) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_0(charX+(distX/magnitude)*movementSpeed);
      charY=round_0(charY+(distY/magnitude)*movementSpeed);
    }
  }
  
  if (currentlyDashing==true){
      if (Math.abs(charY-finalDashDestinationY)<=movementSpeed && Math.abs(charX-finalDashDestinationX)<=movementSpeed ){
    movementSpeed=baseMovementSpeed;
    currentlyDashing=false;
  }
  }
}
    fill(0);
    circle(width/2,height/2,50);
    circle(charX,charY,charR);

}


function mousePressed() {
    isMouseHeld = true;

}

function mouseReleased() {
  isMouseHeld = false;
}




function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}