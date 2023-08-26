


var gameStartDelay=1000;
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

var projectileSpeed=4;
var projectileExpired=false;
var projectileAngle;
var bomb;
var bombs=[];
var bombCounter=1;
var numOfBombsPerCycle=3; // its actually 1 less than written!!!
var canBomb=true;
var autoAttackInterval=1000;
var fadeInterval=autoAttackInterval*2;
var attackToggle=false;
var fadeToggle=false;
var previous;
var screenShotCharX=[];
var screenShotCharY=[];

var weGotHit=false;
var charHealth=100;

var canPressQ=true; // change back to false!!!!
var lastButtonQPressTime=0;
var characterButtonQSpeed=5;
var buttonQprojectiles=[]
var buttonQCooldown=1000;

var bossHealthBar=100;

var tailWhipNurk=0;
var nurgaIncrement=0.05;
var nurkUnwindKiirendus=-7;
var animComplete = false;

var p1x=200;
var p1y=200;
var p2x=300;
var p2y=300;
var p4x=200;
var p4y=0;
var p6x=100;
var p6y=300;
var kontaktJoonega=false;
var tolerance=1;
var beamsNurk=-0.5;

// ################################################
// ################################################
// ################ CANVAS BLOCK ##################
// ################################################
// ################################################

function setup() {
  canvas=createCanvas(600,400);
  canvas.parent("RS3_model_sketch");
  p1x=width/2;
  p1y=height/2;
  p2x=width;
  p2y=height;
  p4x=width/2;
  p4y=-height;
  p6x=0;
  p6y=height;

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
  bombs.push(new bossAutoAttack(charX,charY));
}

function draw() {
  checkStartDelayCD()
  background(0);
  ambassadorBeams();
  text(frameRate(),50,50)
  charMovement();
  checkDashCD();
  checkButtonQCD();
  if (keyIsDown(32) && canPressDash==true){
        spaceBarDash();
   }

  if(canStartFight==true){
    
    if (canBomb==true){
      if (bombs.length<1){
        bombs.push(new bossAutoAttack(charX,charY));
        bombCounter=bombCounter+1;
      }
        for (i=0; i<bombs.length; i++){
          bombs[i].update();
          bombs[i].reveal();
          bombs[i].checkIfHit(charX,charY);
          if (bombs[i].visible==false){
            bombs.splice(i,1);
          }
        }
    }
    if (keyIsDown(81) && canPressQ==true){
         buttonQSkill();
        canPressQ=false;
   }
        for ( i=0; i<buttonQprojectiles.length;i++){
          buttonQprojectiles[i].update(bossX,bossY);
          buttonQprojectiles[i].reveal(bossX,bossY);
          buttonQprojectiles[i].checkIfBossHit(bossX,bossY);
    }
  }
  
  
  if (bombCounter%numOfBombsPerCycle==0){
      canBomb=false;
      animComplete=false;
      tailwhip();
    }
  bossHealthDraw();
  charHealthDraw();
  abilityBarInterface();
}
// ################################################
// ################################################
// ################ CANVAS BLOCK ##################
// ################################################
// ################################################
































// ################################################
// ################################################
// ############ BOSS AUTO ATTACKS #################
// ######### class, function, fade effect #########
// ################################################

class bossAutoAttack{
  constructor(chrX,chrY){
    this.posX=width/2;
    this.posY=height/2;
    this.visible=true;
    this.targetX=chrX;
    this.targetY=chrY;
    
    const self = this;
    
    customTimeoutFunk(function() {
      // Code inside this function will execute after 10 seconds
      // Remove the instance from memory by setting it to null
      self.posX = width/2;
      self.posY = height/2;
      self.visible=false;
    }, 3000);
  }
  

  update(){
    if ( Math.abs(this.posX-this.targetX)<=(charR/2) && Math.abs(this.posY-this.targetY)<=(charR/2) ){
      this.posX=this.targetX;
      this.posY=this.targetY;
    } else {
    this.aimX=this.targetX; // Lets find the vector/angle to know where to shoot.
    this.aimY=this.targetY;
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
  
  reveal(){
    if (this.visible==true){
    if (this.posX==this.targetX && this.posY==this.targetY){
      push();
      noStroke();
      fill(255,0,0,255);
      circle(this.targetX, this.targetY, 25);
      pop();
    } else{
    push();
    fill(255,0,0);
    noStroke();
    circle(this.posX,this.posY,5);
    pop();
    }
    }
    else if (this.visible==false){
      
    }
  }
  
  checkIfHit(targetX, targetY){
    if ( Math.abs(targetX-this.posX)<charR/2 && Math.abs(targetY-this.posY)<charR/2 ){
      text("YOU TURNED TO DUST AN PERISHED!", width/2-100, 90);
      push();
      noStroke();
      fill(255,0,0,255);
      circle(targetX, targetY, 25);
      pop();
      weGotHit=true;
      charHealth=charHealth-0.5;
    }
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

// ################################################
// ################################################
// ############ BOSS AUTO ATTACKS #################
// ######### class, function, fade effect #########
// ################################################


























// ################################################
// ################################################
// ############ BOSS TAILWHIP ATTACK ##############
// ################################################
// ################################################
function tailwhip(){

if (animComplete==false){

  push();
  translate(width/2,height/2);
  rotate(tailWhipNurk);
   rect(-5,45,10,90); // can change tailwhip length here with last param.
    tailWhipNurk=tailWhipNurk+nurgaIncrement;
  if (tailWhipNurk>=1.95){
    nurgaIncrement=nurgaIncrement*nurkUnwindKiirendus;
} else if (tailWhipNurk<=-2*Math.PI ){
  nurgaIncrement=0;
  animComplete=true;
}
  
if (nurgaIncrement==0.05*nurkUnwindKiirendus){ // 0.05 on siin nurgaIncrement
  push();
  fill(125,125,125,55);
  noStroke();
  circle(0,0,270);
  pop();
}
} 
  
if (animComplete==true){
  bombCounter=bombCounter-numOfBombsPerCycle+1;
  tailWhipNurk=0;
  nurgaIncrement=0.05;
  animComplete=false;
  canBomb=true;
  // THIS IS SUPER HACKY BUT IT STOPS FROM CREATING A BOSS PROJECTILE AFTER TAILSWIPE WITH OUTDATED charX and charY coordinates.
  // You can see what i mean by commenting these two lines out and writing "console.log(bombCounter)" in the draw function.
  bombs=[]; 
  bombCounter=bombCounter-1;
  // THIS IS SUPER HACKY BUT IT STOPS FROM CREATING A BOSS PROJECTILE AFTER TAILSWIPE WITH OUTDATED charX and charY coordinates.
} 
  
if ( Math.sqrt((width/2-charX)*(width/2-charX)+(height/2-charY)*(height/2-charY)) < 135  && nurgaIncrement==0.05*-7){
  charHealth=charHealth-2;
}
  pop();
}
// ################################################
// ################################################
// ############ BOSS TAILWHIP ATTACK ##############
// ################################################
// ################################################



























// ################################################
// ################################################
// ################ CHARACTER MOVEMENT ############
// ################################################
// ################################################

function mousePressed() {
    isMouseHeld = true;
}

function mouseReleased() {
  isMouseHeld = false;
}

// "Locomotion"
function charMovement(){
  if (mouseX>=0 && mouseX<=width && mouseY<=height && mouseY>=0){
   
   if (isMouseHeld && currentlyDashing==true) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_number(charX+(distX/magnitude)*movementSpeed,0);
      charY=round_number(charY+(distY/magnitude)*movementSpeed,0);
    }
  } else if (isMouseHeld) {
      finalX=mouseX;
      finalY=mouseY;
       distX=mouseX-charX;
      distY=mouseY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_number(charX+(distX/magnitude)*movementSpeed,0);
      charY=round_number(charY+(distY/magnitude)*movementSpeed,0);
    }
  } else if (!isMouseHeld && ( (Math.abs(finalX-charX))>=movementSpeed || (Math.abs(charY-finalY))>=movementSpeed) ) {
      distX=finalX-charX;
      distY=finalY-charY;
    if (((distX)*(distX)+(distY)*(distY))!=0){
      magnitude=Math.sqrt((distX)*(distX)+(distY)*(distY));
      charX=round_number(charX+(distX/magnitude)*movementSpeed,0);
      charY=round_number(charY+(distY/magnitude)*movementSpeed,0);
    }
  }
  
  if (currentlyDashing==true){
      if (Math.abs(charY-finalDashDestinationY)<=movementSpeed && Math.abs(charX-finalDashDestinationX)<=movementSpeed ){
    movementSpeed=baseMovementSpeed;
    currentlyDashing=false;
  }
  }
}
    fill(255);
    circle(width/2,height/2,50);
    circle(charX,charY,charR);
}

// "DASH" ability
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
       charX=round_number(charX+scaledDashX,0);
       charY=round_number(charY+scaledDashY,0);
       finalX=round_number(finalDashDestinationX,0);
       finalY=round_number(finalDashDestinationY,0);
   }
   lastPressTime = new Date().getTime();
}

// "DASH" ability COOLDOWN
function checkDashCD(){
  currentTime = new Date().getTime();
  timeSinceLastPress = currentTime - lastPressTime;
    if (timeSinceLastPress>=DashCooldown){
        canPressDash=true;
        dash_CD_text="SPACE";
 } else{
   canPressDash=false;
   dash_CD_text=str(round_number(Math.abs(DashCooldown-timeSinceLastPress)/1000,0));
 }
}

// ################################################
// ################################################
// ################ CHARACTER MOVEMENT ############
// ################################################
// ################################################










// ################################################
// ################################################
// ################ CHARACTER HEALTHBAR ###########
// ################################################
// ################################################
function charHealthDraw(){
  push();
  fill(255,0,0,125)
  rect(width*0.1, height*0.7, 10 ,90);
  pop();
  push();
  fill(0,255,0,125);
  rect(width*0.1, height*0.7, 10 ,90*(charHealth/100));
  pop();
  push();
  fill(255);
  text("HP",width*0.1,height-10)
  pop();
  if (charHealth<=0){
    text("You turned to dust and perished...",width/2-100, 90);
    noLoop();
  }
}

// ################################################
// ################################################
// ################ CHARACTER HEALTHBAR ###########
// ################################################
// ################################################














// ################################################
// ################################################
// ############## START DELAY TIMER  ##############
// ################################################
// ################################################

function checkStartDelayCD(){
  currentDelayTime = new Date().getTime();
  timeSinceLastDelayStarted = currentDelayTime - delayStarted;
    if ( timeSinceLastDelayStarted>=gameStartDelay){
      canStartFight=true;
 } else{
   canStartFight=false;
 }
}
// ################################################
// ################################################
// ############## START DELAY TIMER  ##############
// ################################################
// ################################################




















// ################################################
// ################################################
// ############## ABILITY BAR "INTERFACE" #########
// ################################################
// ################################################

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
  rect(140,height-50, 55,25);
  pop();
  
  text(dash_CD_text,150,height-35);
  text("Dash",155,height-10);
  
  push();
  fill(bar_col_2);
  rect(250,height-50, 25,25);
  pop();
  
  text(buttonQ_CD_text,258,height-35);
  text("Basic",250,height-10);  
}
// ################################################
// ################################################
// ############## ABILITY BAR "INTERFACE" #########
// ################################################
// ################################################

















// ################################################
// ################################################
// ############ ABILITY "Q" aka spear throw #######
// ################################################
// ################################################

class buttonQAbility{
  constructor(myX,myY,_aimX,_aimY){
    this.posX=myX;
    this.posY=myY;
    this.aimedAtX=_aimX;
    this.aimedAtY=_aimY;
  }
  
  update(targetX,targetY){
   // this.aimX=targetX; // Lets find the vector/angle to know where to shoot.
  //  this.aimY=targetY;
    
    this.aimX=this.aimedAtX; // Lets find the vector/angle to know where to shoot.
    this.aimY=this.aimedAtY;
    
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
  
  reveal(){
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


function buttonQSkill(){
  bossTargetX=width/2;  // or set this to aimX/mouseX
  bossTargetY=height/2; // or set this to aimY/mouseY. MAKE IT A TOGGLE!!!!!
  projectileQ = new buttonQAbility(charX,charY,bossTargetX, bossTargetY);
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
   buttonQ_CD_text=str(round_number(Math.abs(buttonQCooldown-timeSinceLastQPress)/1000,0));
 }
}
// ################################################
// ################################################
// ############ ABILITY "Q" aka spear throw #######
// ################################################
// ################################################


















// ################################################
// ################################################
// ############ DISPLAY BOSS HEALTH BAR ###########
// ################################################
// ################################################
function bossHealthDraw(){
  push();
  fill(255,0,0,125)
  rect(width*0.3, 20, width*0.4 ,20);
  pop();
  push();
  fill(0,255,0,125);
  rect(width*0.3, 20, (width*0.4)*(bossHealthBar/100) ,20);
  pop();
  if (bossHealthBar<=0){
    text("This creature shall trouble you no longer...",width/2-100, 90);
    noLoop();
  }
}
// ################################################
// ################################################
// ############ DISPLAY BOSS HEALTH BAR ###########
// ################################################
// ################################################

















// ################################################
// ################################################
// ############## AMBASSADOR BEAMS MECHANIC #######
// ################################################
// ################################################
function kaugusPunktideVahel(p1,p2){
   return Math.sqrt((p1[0]-p2[0])*(p1[0]-p2[0])+(p1[1]-p2[1])*(p1[1]-p2[1]));
}

function punktCpunktideABvahel(p1,p2,p3){
  kaugused=Math.abs(kaugusPunktideVahel(p1,p3) + kaugusPunktideVahel(p3,p2) - kaugusPunktideVahel(p1,p2))
  if (kaugused < tolerance ){
    kontaktJoonega=true;
    charHealth=charHealth-1;
    point(p3[0],p3[1]);
  }
}


function ambassadorBeams(){
  
  p3x=charX; // charX
  p3y=charY; //charY
  circle(width/2,height/2,50);
  //circle(p3x,p3y,5);
  p1=[p1x,p1y];
  p2=[p2x,p2y];
  p3=[p3x,p3y]; // character coords
  p4=[p4x,p4y];
  p6=[p6x,p6y];
  push();
  strokeWeight(10);
  stroke(255);
  line(p1[0],p1[1],p2[0],p2[1]);
  line(p1[0],p1[1],p4[0],p4[1]);
  line(p1[0],p1[1],p6[0],p6[1]);
  pop();
  punktCpunktideABvahel(p1,p2,p3);
  punktCpunktideABvahel(p1,p4,p3);
  punktCpunktideABvahel(p1,p6,p3);
  
  p2_rotated=rotatingYaroundOrigin(p2[0], 0 ,p2[1], beamsNurk ,p1[0], 0 ,p1[1]);
  p4_rotated=rotatingYaroundOrigin(p4[0], 0 ,p4[1], beamsNurk ,p1[0], 0 ,p1[1]);
  p6_rotated=rotatingYaroundOrigin(p6[0], 0 ,p6[1], beamsNurk ,p1[0], 0 ,p1[1]);
  p2x=p2_rotated.x;
  p2y=p2_rotated.z;
  p4x=p4_rotated.x;
  p4y=p4_rotated.z;
  p6x=p6_rotated.x;
  p6y=p6_rotated.z;
}


function rotatingYaroundOrigin(x, y, z, angle,originX,originY,originZ) {
  var radianAngle = angle * (Math.PI / 180);
  var cosTheta = Math.cos(radianAngle);
  var sinTheta = Math.sin(radianAngle);
  var rotatedX = (x-originX) * cosTheta -(z-originZ) * sinTheta+originX;
  var rotatedZ = (x-originX) * sinTheta + (z-originZ) * cosTheta+originZ;
  return { x: rotatedX, y: y, z: rotatedZ };
}

// ################################################
// ################################################
// ############## AMBASSADOR BEAMS MECHANIC #######
// ################################################
// ################################################














// ################################################
// ################################################
// ############## SOLAK RAIN MECH #################
// ################################################
// ################################################


function solkaPolkaRain(){
  
}


// ################################################
// ################################################
// ############## SOLAK RAIN MECH #################
// ################################################
// ################################################













// ################################################
// ################################################
// ################ TIME OUT FUNCTION #############
// ################################################
// ################################################
function customTimeoutFunk(func, delay) {
  const startTime = Date.now();

  function checkTime() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime >= delay) {
      func(); // Execute the function
    } else {
      setTimeout(checkTime, 1); // Check again after a short delay
    }
  }

  checkTime();
}

// This can be any other function, its just left here as a demo.
//function timeoutInputFunk(){
//    console.log("This will be executed after 3000 milliseconds.");
//}

// Usage
//customTimeoutFunk(inputFunk, 3000);
// ################################################
// ################################################
// ################ TIME OUT FUNCTION #############
// ################################################
// ################################################

















// ################################################
// ################################################
// ################ Rounding function #############
// ######### Only works if decimals>=0 ############
// ################################################

function round_number(num,decimals) {
    return (Math.sign(num) * Math.round(Math.abs(num)*10**decimals)/(10**decimals) )
}
// ################################################
// ################################################
// ################ Rounding function #############
// ######### Only works if decimals>=0 ############
// ################################################