
var sketch_1 = function(p) {
    p.iter=0;
    p.setup = function(){
        p.temp_laius=500;
        p.createCanvas(p.temp_laius,100);
        p.X=p.width/2;
    }
    p.draw = function(){
        //updateColors();
        p.background(0,0,0);
    
        p.push();
        p.strokeWeight(0);
        p.fill(255,255,255);
        p.text("iteratsioon:"+p.str(p.iter),20,20);
        p.pop();
    
        p.push();
        p.noStroke();
        p.fill(255,255,255);
        p.rect(p.X,0,10,p.height);
        p.pop();
    
        p.X=Math.random()*p.temp_laius;
        p.iter=p.iter+1;
    }
}


var random_joonis_1D = new p5(sketch_1, 'sketch-container1');    

var sketch_2 = function(p) {
    
    p.iter=0;
    p.aeg=0;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.X=p.width/2;
   }
   
   p.draw = function() {
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255)
       p.text("iteratsioon:"+p.str(p.iter),20,20)
       p.pop();

       p.push();
       p.noStroke();
       p.fill(255,255,255);
       p.rect(p.X,0,10,p.height);
       p.pop();
   
       p.X=p.noise(p.aeg)*p.temp_laius;
       p.aeg=p.aeg+0.01;
       p.iter=p.iter+1;
   }
   
   }
var perlin_joonis_1D = new p5(sketch_2, 'sketch-container2');

var sketch_3 = function(p) {
    
    p.iter=0;
    p.aeg=0;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.X=p.width/2;
       p.Y=p.height/2;
   }
   
   p.draw = function() {
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.noStroke();
       p.fill(255,255,255);
       p.circle(p.X,p.Y,15);
       p.pop();
   
       p.X=Math.random()*p.width;
       p.Y=Math.random()*p.height;
       p.aeg=p.aeg+0.01;
       p.iter=p.iter+1;
   }
   }
var random_joonis_2D = new p5(sketch_3, 'sketch-container3');




var sketch_4 = function(p) {
    
    p.iter=0;
    p.aegX=0;
    p.aegY=10000;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.X=p.width/2;
       p.Y=p.height/2;
   }
   
   p.draw = function() {
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.noStroke();
       p.fill(255,255,255);
       p.circle(p.X,p.Y,15);
       p.pop();

       p.X=p.noise(p.aegX)*p.width;
       p.Y=p.noise(p.aegY)*p.height;
       p.aegX=p.aegX+0.01;
       p.aegY=p.aegY+0.01;
       p.iter=p.iter+1;
   }
   }
var perlin_joonis_2D = new p5(sketch_4, 'sketch-container4');

var sketch_5 = function(p) {
    
    p.iter=0;
    p.aegX=0;
    p.aegY=10000;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.X=p.width/2;
       p.Y=p.height/2;
   }
   
   p.draw = function() {
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.stroke(255);
       p.noFill();
       p.beginShape();
       for (i=0; i<=p.width; i++){
        p.vertex(i,Math.random()*p.height);
       }
       p.endShape();
       p.pop();

       p.X=Math.random()*p.width;
       p.Y=Math.random()*p.height;
       p.aegX=p.aegX+0.01;
       p.aegY=p.aegY+0.01;
       p.iter=p.iter+1;
   }
   }
var random_graafik_2D = new p5(sketch_5, 'sketch-container5');



var sketch_6 = function(p) {
    
    p.iter=0;

    p.aegY=10000;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.Y=p.height/2;
   }
   
   p.draw = function() {
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.stroke(255);
       p.noFill();
       p.beginShape();
       for (i=0; i<=p.width; i++){
        p.Y=p.noise(p.aegY)*p.height;
        p.vertex(i,p.Y);
        p.aegY=p.aegY+0.01;
       }
       p.endShape();
       p.pop();

       p.iter=p.iter+1;
   }
   }
var perlin_graafik_2D = new p5(sketch_6, 'sketch-container6');




var sketch_7 = function(p) {
    
    p.iter=0;

    p.aegY=10000;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.Y=p.height/2;
       p.ink_slaider=p.createSlider(0.001,1,0.01,0.001);
       p.ink_slaider.position(0,p.height)
       p.ink_text=p.createP("Inkremendi väärtus: ");
       p.ink_text.position(0,p.height+10)
       p.ink_text.style("color:black; fontSize:16px");
   }
   
   p.draw = function() {
    p.inkrement=p.ink_slaider.value();
    p.ink_text.html("Inkremendi väärtus: "+p.str(p.inkrement));
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.stroke(255);
       p.noFill();
       p.beginShape();
       for (i=0; i<=p.width; i++){
        p.Y=p.noise(i*p.inkrement)*p.height;
        p.vertex(i,p.Y);
        p.aegY=p.aegY+0.01;
       }
       p.endShape();
       p.pop();

       p.iter=p.iter+1;
   }
   }
var perlin_joonis_2D = new p5(sketch_7, 'sketch-container7');





var sketch_8 = function(p) {
    
    p.iter=0;
    p.start=0;

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.Y=p.height/2;
       p.ink_slaider=p.createSlider(0.01,10,1,0.01);
       p.ink_slaider.position(0,p.height)
       p.ink_text=p.createP("Inkremendi väärtus: ");
       p.ink_text.position(0,p.height+10)
       p.ink_text.style("color:black; fontSize:16px");
   }
   
   p.draw = function() {
    p.inkrement=p.ink_slaider.value();
    p.ink_text.html("Inkremendi väärtus: "+p.str(p.inkrement));
       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.stroke(255);
       p.noFill();
       p.beginShape();
       p.aegY=p.start;
       for (i=0; i<=p.width; i++){
        p.Y=p.noise(p.aegY*p.inkrement)*p.height;
        p.vertex(i,p.Y);
        p.aegY=p.aegY+0.01;
       }
       p.endShape();
       p.pop();
       p.iter=p.iter+1;
       p.start=p.start+0.01;
   }
   }
var perlin_joonis_2D = new p5(sketch_8, 'sketch-container8');





var sketch_9 = function(p) {
    
    p.iter=0;
    p.start=0;

    p.X_massiiv=[];
    p.Y_massiiv=[];

    p.setup = function() {
       p.temp_laius=500;
       p.createCanvas(p.temp_laius,100);
       p.Y=p.height/2;

       for (i=0; i<=p.width; i++){
        p.X_massiiv[i]=i;
        p.Y_massiiv[i]=Math.random()*p.height;
   }

   }
   
   p.draw = function() {

       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.text("iteratsioon:"+p.str(p.iter),20,20);
       p.pop();

       p.push();
       p.stroke(255);
       p.noFill();
       p.beginShape();
       p.Y_massiiv.shift();
       p.Y_massiiv.push(Math.random()*p.height);
       for (i=0; i<=p.width; i++){
            if (i>=1){
                p.Y_massiiv[i-1]=p.Y_massiiv[i];
                p.vertex(p.X_massiiv[i-1],p.Y_massiiv[i-1]);
            }
            }
       p.endShape();
       p.pop();
       p.iter=p.iter+1;
   }
   }
var perlin_joonis_2D = new p5(sketch_9, 'sketch-container9');




var sketch_10 = function(p) {

    p.inkrement=0.01;

    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.pixelDensity(1);
   }
   
   p.draw = function() {

       p.loadPixels();

       //updateColors();
       p.background(0,0,0);
   
       p.push();
       p.strokeWeight(0);
       p.fill(255,255,255);
       p.pop();

       for (i = 0; i<p.width; i++){
        for (j=0; j<p.height; j++){
            indeks=(i+j*p.width)*4;
            r= Math.random()*255;
            p.pixels[indeks+0] = r;
            p.pixels[indeks+1] = r;
            p.pixels[indeks+2] = r;
            p.pixels[indeks+3] = 255;
        }
       }
       p.updatePixels();
       p.push();
       p.stroke(255);
       p.noFill();

       p.pop();
   }
   }
var perlin_joonis_2D = new p5(sketch_10, 'sketch-container10');




var sketch_11 = function(p) {


    p.X=0;
    p.Y=0;


    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.pixelDensity(1);

       p.ink_slaider=p.createSlider(0.0001,0.1,0.001,0.0001);
       p.ink_slaider.position(0,p.height)
       p.ink_text=p.createP("Inkremendi väärtus: ");
       p.ink_text.position(0,p.height+10)
       p.ink_text.style("color:black; fontSize:16px");


   }
   
   p.draw = function() {
    p.inkrement=p.ink_slaider.value();
    p.ink_text.html("Inkremendi väärtus: "+p.str(p.inkrement));
       p.loadPixels();
       //updateColors();
       p.background(0,0,0);

       for (i = 0; i<p.width; i++){
        p.Y=0;
        for (j=0; j<p.height; j++){
            indeks=(i+j*p.width)*4;
            r = p.noise(p.X,p.Y)*255;
            p.pixels[indeks+0] = r;
            p.pixels[indeks+1] = r;
            p.pixels[indeks+2] = r;
            p.pixels[indeks+3] = 255;
            p.Y=p.Y+p.inkrement;
        }
        p.X=p.X+p.inkrement;
       }
       p.updatePixels();
   }
   }
var perlin_joonis_2D = new p5(sketch_11, 'sketch-container11');






var sketch_12 = function(p) {

    p.X=0;
    p.Y=0;
    p.skaala=10;
    p.veerg
    p.rida
    p.inkrement=0.01;

    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.veerg=Math.floor(p.width/p.skaala);
       p.rida=Math.floor(p.height/p.skaala);
   }
   
   p.draw = function() {
    p.background(0);
    p.X=0;
       for (i = 0; i<p.veerg; i++){
        p.Y=0;
        for (j=0; j<p.rida; j++){
            r = p.noise(p.X,p.Y)*255;
            p.Y=p.Y+p.inkrement;
            p.fill(p.random(255));
            p.rect(i*p.skaala, j*p.skaala,p.skaala,p.skaala)
        }
        p.X=p.X+p.inkrement;
       }
       p.noLoop();
   }
   }
var perlin_joonis_2D = new p5(sketch_12, 'sketch-container12');

var sketch_13 = function(p) {


    p.X=0;
    p.Y=0;
    p.skaala=10;
    p.veerg
    p.rida
    p.inkrement=0.1;

    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.veerg=Math.floor(p.width/p.skaala);
       p.rida=Math.floor(p.height/p.skaala);
   }
   
   p.draw = function() {
    p.background(0);
    p.X=0;
       for (i = 0; i<p.veerg; i++){
        p.Y=0;
        for (j=0; j<p.rida; j++){
            r = p.noise(p.X,p.Y)*255;
            p.Y=p.Y+p.inkrement;
            p.fill(r);
            p.rect(i*p.skaala, j*p.skaala,p.skaala,p.skaala)
        }
        p.X=p.X+p.inkrement;
       }

   }
   }
var perlin_joonis_2D = new p5(sketch_13, 'sketch-container13');



var sketch_14 = function(p) {


    p.X=0;
    p.Y=0;
    p.Z=0;
    p.skaala=10;
    p.veerg
    p.rida
    p.inkrement=0.1;

    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.veerg=Math.floor(p.width/p.skaala);
       p.rida=Math.floor(p.height/p.skaala);
   }
   
   p.draw = function() {
    p.background(0);
    p.X=0;
    for (i = 0; i<p.veerg; i++){
        p.Y=0;
        for (j=0; j<p.rida; j++){
            vektor = p5.Vector.fromAngle(p.random(2*Math.PI));
            p.Y=p.Y+p.inkrement;

            p.push();
            p.stroke(255);
            p.noFill();
            p.translate(i*p.skaala, j*p.skaala);
            p.rotate(vektor.heading());
            p.line(0,0,p.skaala,0);
            p.pop();

        }
        p.X=p.X+p.inkrement;
       }
   }
   }
var perlin_joonis_2D = new p5(sketch_14, 'sketch-container14');



var sketch_15 = function(p) {


    p.X=0;
    p.Y=0;
    p.skaala=10;
    p.veerg
    p.rida
    p.inkrement=0.1;

    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.veerg=Math.floor(p.width/p.skaala);
       p.rida=Math.floor(p.height/p.skaala);
   }
   
   p.draw = function() {
    p.background(0);
    p.X=0;
    for (i = 0; i<p.veerg; i++){
        p.Y=0;
        for (j=0; j<p.rida; j++){
            nurk = p.noise(p.X,p.Y)*2*Math.PI;
            //vektor = p5.Vector.fromAngle(p.random(2*Math.PI));
            vektor = p5.Vector.fromAngle(nurk);
            p.Y=p.Y+p.inkrement;

            p.push();
            p.stroke(255);
            p.noFill();
            p.translate(i*p.skaala, j*p.skaala);
            p.rotate(vektor.heading());
            p.line(0,0,p.skaala,0);
            p.pop();

        }
        p.X=p.X+p.inkrement;
       }

   }
   }
var perlin_joonis_2D = new p5(sketch_15, 'sketch-container15');




var sketch_16 = function(p) {


    p.X=0;
    p.Y=0;
    p.Z=0;
    p.skaala=10;
    p.veerg
    p.rida
    p.inkrement=0.1;

    p.setup = function() {
       p.temp_laius=200;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.veerg=Math.floor(p.width/p.skaala);
       p.rida=Math.floor(p.height/p.skaala);
   }
   
   p.draw = function() {
    p.background(0);
    p.X=0;
    for (i = 0; i<p.veerg; i++){
        p.Y=0;
        for (j=0; j<p.rida; j++){
            nurk = p.noise(p.X,p.Y,p.Z)*2*Math.PI;
            //vektor = p5.Vector.fromAngle(p.random(2*Math.PI));
            vektor = p5.Vector.fromAngle(nurk);
            p.Y=p.Y+p.inkrement;

            p.push();
            p.stroke(255);
            p.noFill();
            p.translate(i*p.skaala, j*p.skaala);
            p.rotate(vektor.heading());
            p.line(0,0,p.skaala,0);
            p.pop();

        }
        p.X=p.X+p.inkrement;
       }
       p.Z=p.Z+0.01;
   }
   }
var perlin_joonis_2D = new p5(sketch_16, 'sketch-container16');



var sketch_17 = function(p) {


    p.X=0;
    p.Y=0;
    p.Z=0;
    p.skaala=10;
    p.veerg
    p.rida
    p.inkrement=0.1;
    p.osakesed=[];
    p.osakeste_arv=300;
    p.v2li;
    p.iter=0;

    class Osake{
        constructor(){
            this.pos=[Math.random()*p.width,Math.random()*p.height];
            this.vel=[0,0];
            this.accel=[0,0];
            this.maxSpeed=4;
            this.prevPos = [this.pos[0], this.pos[1]];
        }

        update(){
            for(var i=0;i<this.pos.length;i++){
                this.vel[i]=this.vel[i]+(this.accel[i]);
                if (this.vel[i]>=this.maxSpeed){ //set max velocity
                    this.vel[i]=this.maxSpeed;
                } else if (this.vel[i]<=-this.maxSpeed){
                    this.vel[i]=-this.maxSpeed;
                }
                this.pos[i]=this.pos[i]+(this.vel[i]);
                this.accel[i]=this.accel[i]*0;
             }
    }

        rakendaJoudu(joud){
            this.accel[0]=this.accel[0]+(joud.x);
            this.accel[1]=this.accel[1]+(joud.y);
        }

        reveal(){
            p.stroke(255,10);
            p.strokeWeight(1);
            p.line(this.pos[0],this.pos[1], this.prevPos[0], this.prevPos[1]);
            this.updatePrev();
        }

        updatePrev() {
            this.prevPos[0] = this.pos[0];
            this.prevPos[1] = this.pos[1];
          }

        edges(){
            if(this.pos[0]>p.width){
                this.pos[0]=0;
                this.updatePrev();
            }
            if(this.pos[1]>p.height){
                this.pos[1]=0;
                this.updatePrev();
            }
            if(this.pos[0]<0){
                this.pos[0]=p.width-1; //WHY DOES THIS CRASH WHEN I REMOVE THE "-1"
                this.updatePrev();
            }
            if(this.pos[1]<0){
                this.pos[1]=p.height-1; //WHY DOES THIS CRASH WHEN I REMOVE THE "-1"
                this.updatePrev();
            }
        }

        follow(vektorid){
            var x = Math.floor(this.pos[0]/p.skaala);
            var y = Math.floor(this.pos[1]/p.skaala);
            //console.log(this.pos[1])
            var temp_indeks = x+y*p.rida;
            var ajutine_joud=vektorid[temp_indeks];
            this.rakendaJoudu(ajutine_joud);
        }

    }

    p.setup = function() {
       p.temp_laius=600;
       p.createCanvas(p.temp_laius,p.temp_laius);
       p.veerg=Math.floor(p.width/p.skaala);
       p.rida=Math.floor(p.height/p.skaala);
       p.background(0);
       for (var i=0; i<p.osakeste_arv; i++){
            p.osakesed[i] = new Osake();
       }
       p.v2li= new Array(p.veerg*p.rida);
   }
   
   p.draw = function() {
   // p.background(0);
    p.X=0;
    for (var i = 0; i<p.veerg; i++){
        p.Y=0;
        for (var j=0; j<p.rida; j++){
           var indeks=i+j*p.rida;
           var nurk = p.noise(p.X,p.Y,p.Z)*2*Math.PI*4;
           //vektor = p5.Vector.fromAngle(p.random(2*Math.PI));
           var vektor = p5.Vector.fromAngle(nurk);
           vektor.setMag(1)
            p.v2li[indeks]=vektor;
            p.Y=p.Y+p.inkrement;
            p.stroke(0, 50);
            p.push();
            p.stroke(255);
            p.noFill();
            p.translate(i*p.skaala, j*p.skaala);
            p.rotate(vektor.heading());
          //  p.line(0,0,p.skaala,0);
            p.pop();

        }
        p.X=p.X+p.inkrement;
       }
       p.Z=p.Z+0.0003;
       for (var i=0; i<p.osakeste_arv; i++){
        p.osakesed[i].follow(p.v2li);
        p.osakesed[i].update();
        p.osakesed[i].reveal();
        p.osakesed[i].edges();
        //p.osakesed[i].rakendaJoudu(Math.random()-0.5);
   }

p.iter=p.iter+1;
   }
   }
var perlin_joonis_2D = new p5(sketch_17, 'sketch-container17');




var sketch_18 = function(p) {
    p.laius=1600;
    p.korgus=1600;
    p.skaala=20;
    p.veerud=p.laius/p.skaala;
    p.read=p.korgus/p.skaala;
    p.Zarray = new Array(p.veerud);
    p.inkrement=0.1;
    p.Xinc;
    p.Yinc;
    
    p.linnulend=0;

    p.setup = function(){
        p.createCanvas(600,600, p.WEBGL);

        for (var i = 0; i < p.Zarray.length; i++) {
            p.Zarray[i] = new Array(p.read);
          }
    }
    p.draw = function(){


        p.Xinc=p.linnulend;
        for (i=0; i<p.veerud; i++){
            p.Yinc=0;
            for (j=0; j<p.read; j++){
                p.Zarray[i][j]=((p.noise(p.Xinc,p.Yinc)-0.5)*200);
                p.Yinc=p.Yinc+p.inkrement;
            }
            p.Xinc=p.Xinc+p.inkrement;
        }

        p.rotateX(Math.PI/3);
        //updateColors();
        p.background(0,0,0);

        for (i=0; i<p.veerud-1; i++){
            p.beginShape(p.TRIANGLE_STRIP);
            for (j=0; j<p.read; j++){
                p.stroke(255);
                p.noFill();
                p.vertex( i*p.skaala-p.laius/2, j*p.skaala-p.korgus/2, p.Zarray[i][j] );
                p.vertex( (i+1)*p.skaala-p.laius/2, j*p.skaala-p.korgus/2,  p.Zarray[i+1][j] );
        }
        p.endShape();
    }
    p.linnulend=p.linnulend+0.1
    }
}
var random_joonis_1D = new p5(sketch_18, 'sketch-container18'); 