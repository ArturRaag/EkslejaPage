var sketch_18 = function(p) {
    p.laius=700;
    p.korgus=1000;
    p.skaala=20;
    p.veerud=p.laius/p.skaala;
    p.read=p.korgus/p.skaala;
    p.Zarray = new Array(p.veerud);
    p.inkrement=0.1;
    p.Xinc;
    p.Yinc;
    p.linnulend=0;
    p.toggle=true;
    p.setup = function(){
      p.createCanvas(300,300, p.WEBGL);
      p.inkrementSlider=p.createSlider(0.01,0.3,0.1,0.01);
      p.inkrementSlider.position(0,340);
      p.PAUSButton=p.createButton("Pause");
      p.PAUSButton.position(230,300);
      p.PAUSButton.style("width:70px");
      p.inkrementText=p.createP("Inkremendi väärtus: "+p.str(p.inkrementSlider.value()));
      p.inkrementText.position(0,300);
      p.PAUSButton.mousePressed(p.button);
        for (var i = 0; i < p.Zarray.length; i++) {
            p.Zarray[i] = new Array(p.read);
          }
    }
    p.draw = function(){
      p.inkrement=p.inkrementSlider.value();
      p.inkrementText.html("Inkremendi väärtus: "+p.str(p.inkrementSlider.value()));
      p.Xinc=p.linnulend;
      for (j=0; j<p.read; j++){
            p.Yinc=0;
            for (i=0; i<p.veerud; i++){
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
    p.linnulend=p.linnulend-0.1
    }
  
  p.button=function(){
    if (p.toggle==true){
      p.toggle=false
      p.noLoop();
      p.PAUSButton.html("Continue")
    } else if (p.toggle==false){
      p.toggle=true;
      p.loop();
      p.PAUSButton.html("Pause")
    }
  }
}

 
var myp5 = new p5(sketch_18,"sketch-container12");