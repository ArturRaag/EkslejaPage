function setup() {
  canvas=createCanvas(400,  400, WEBGL);
  canvas.parent('rose_sketch');
  angleMode(DEGREES);
  stroke(100,180,200);
  strokeWeight(4);
   raadius=150;
 
  
  //----------------- AJAS MUUTUVAD PARAMEETRID-----------------
  muutumine_samm=0.1;
  muutuv_otsa_kuju=0.1;
  muutuv_lehtede_arv=0.1;
  muutuv_otsa_kuju=0.1;
  muutuv_lehe_rippumine=0.1;
  //-----------------AJAS MUUTUVAD PARAMEETRID-----------------
  
  
  createDiv();
  nurk_phi_txt=createP("Nurk 	&#966");
  nurk_phi_txt.style("margin-right: 20px;");
  nurk_phi_txt.position(width+50,15);
  lehekeste_kõrgus=createSlider(1,25,1.1,0.1);
  lehekeste_kõrgus.position(width+50,45);
  nurk_phi_txt.parent('rose_sketch');
  lehekeste_kõrgus.parent('rose_sketch');
  
  createDiv();
  lõike_sügavus_txt=createP("Lehe lõike sügavus");
  lõike_sügavus_txt.style("margin-right: 20px;");
  lõike_sügavus_txt.position(width+50,85);
  lõike_sügavus=createSlider(1,14,3,1);
  lõike_sügavus.position(width+50,115);
  lõike_sügavus_txt.parent('rose_sketch');
  lõike_sügavus.parent('rose_sketch');
  
  createDiv();
  lehe_otsad_txt=createP("Lehe otsa kuju");
  lehe_otsad_txt.style("margin-right: 20px;");
  lehe_otsad_txt.position(width+50,165);
  lehe_otsad=createSlider(1,12,2);
  lehe_otsad.position(width+50,195);
  lehe_otsad_txt.parent('rose_sketch');
  lehe_otsad.parent('rose_sketch');
  
  createDiv();
  lehe_arv_txt=createP("Lehtede arv/kattuvus");
  lehe_arv_txt.style("margin-right: 20px;");
  lehe_arv_txt.position(width+50,230);
  lehe_arv=createSlider(1,10,1.1,0.1);
  lehe_arv.position(width+50,265);
  lehe_arv_txt.parent('rose_sketch');
  lehe_arv.parent('rose_sketch');
  
  createDiv();
  rippumise_slider_txt=createP("Lehe rippumine");
  rippumise_slider_txt.style("margin-right: 20px;");
  rippumise_slider_txt.position(width+50,295);
  rippumise_slider=createSlider(-4,6,2,1);
  rippumise_slider.position(width+50,325);
  rippumise_slider_txt.parent('rose_sketch');
  rippumise_slider.parent('rose_sketch');
  
  
  X_eq=createP("");
  Y_eq=createP("");
  Z_eq=createP("");
  
  X_eq.parent('rose_sketch');
  Y_eq.parent('rose_sketch');
  Z_eq.parent('rose_sketch');

  X_eq.position(50,380);
  Y_eq.position(50,500);
  Z_eq.position(50,620);
  
}

function draw() {
  updateColors();

  frameRate(10)
  background(bgColor);
  orbitControl(4,4,0.01);
  
  lehe_kõrgus=lehekeste_kõrgus.value();
  lehe_lõike_sügavus=lõike_sügavus.value();
  lehe_otsa_kuju_parameeter=lehe_otsad.value();
  lehetede_arv=lehe_arv.value();
  rippumise_coef=rippumise_slider.value();
  
  
  
  for (let r=0; r<=1; r=r+0.01){
    beginShape(POINTS);
    stroke((50-20)*r+20, (180-20)*r+20, r*150+105);
    for(let theta=0; theta<=180*15; theta=theta+2){
      let phi=lehe_kõrgus*Math.exp(theta/1500);
      let petal_cut = 1-(1/lehe_lõike_sügavus)*pow(1-(lehetede_arv*theta%360)/180,lehe_otsa_kuju_parameeter) ;
      let hanging_r=rippumise_coef*pow(1.3*r-1,2)*pow(r,2)*sin(phi);
      
      let pX=raadius*petal_cut*r*sin(phi)*sin(theta);
      let pY=-raadius*petal_cut*(r*cos(phi)-hanging_r);
      let pZ=raadius*petal_cut*r*sin(phi)*cos(theta);
      vertex(pX,pY,pZ);
  }
  endShape();
 }
 //raadius=raadius+0.5;
  
  petal_cut_str=" \\left(1-\\dfrac{"+"1"+"}{"+str(lehe_lõike_sügavus)+"}"+" \\cdot \\left(1-\\dfrac{"+str(lehetede_arv)+"\\cdot \\dfrac{  \\theta }{360} }{180} \\right)^{"+str(lehe_otsa_kuju_parameeter)+"} \\right)";
  
  rippumise_coef_str="("+str(rippumise_coef)+")"+"\\cdot \\left("+"1.3 \\cdot r-1"+" \\right)^{2} \\cdot r^{2} \\cdot sin( \\theta)";
  
  phi_str=str(lehe_kõrgus)+"\\cdot e^{\\frac{\\theta}{1500}}"
  
  X_eq_string="X_{sph}="+str(raadius)+str(petal_cut_str)+ " \\cdot r \\cdot sin("+str(phi_str)+") \\cdot cos("+"\\theta"+")";
  
  Y_eq_string="Y_{sph}="+"-"+str(raadius)+str(petal_cut_str)+ " \\left( r \\cdot cos("+str(phi_str)+"-"+str(rippumise_coef_str) +"  ) \\right)"
  
  Z_eq_string="Z_{sph}="+str(raadius)+str(petal_cut_str)+" \\cdot r \\cdot sin("+str(phi_str)+") \\cdot cos(\\theta) ";
    
  katex.render(X_eq_string, X_eq.elt);
  katex.render(Y_eq_string, Y_eq.elt);
  katex.render(Z_eq_string, Z_eq.elt);
  
  if (lehekeste_kõrgus.value()<=1){
    muutumine_samm=muutumine_samm*(-1);
  } else if (lehekeste_kõrgus.value()>=24){
    muutumine_samm=muutumine_samm*(-1);
  }
  
  if (lehe_arv.value()<=1){
    muutuv_lehtede_arv=muutuv_lehtede_arv*(-1)
  } else if (lehe_arv.value()>=10){
    muutuv_lehtede_arv=muutuv_lehtede_arv*(-1)
  }
  
  lehekeste_kõrgus.value(lehekeste_kõrgus.value()+muutumine_samm);
  //lehe_arv.value(lehe_arv.value()+muutuv_lehtede_arv);
}

function updateColors() {
  const body = document.querySelector('body');
  const styles = window.getComputedStyle(body);
  bgColor = color(styles.backgroundColor); 

  const heading_col=document.querySelector('h2');
  const h2_style = window.getComputedStyle(heading_col);
  headingColor = color(h2_style.color);


  setTimeout(updateColors, 1);
  // update every second
}