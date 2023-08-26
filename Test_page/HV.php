<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="main.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Eksleja</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>

<link rel="icon" href="favicon.ico" type="image/x-icon">
<img src="https://www.eksleja.ee/images/eksleja.jpg" alt="Eksleja" hidden>
      <!-- Open Graph meta tags -->
     <meta property="og:title" content="Eksleja">
     <meta property="og:description" content="This is a description of my website.">
     <meta property="og:image" content="https://www.eksleja.ee/images/eksleja.jpg">
     <meta property="og:url" content="https://eksleja.ee">
     <meta property="og:type" content="website">
     <meta property="og:image:crop" content="16:9">

     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js" integrity="sha384-cpW21h6RZv/phavutF+AuVYrr+dA8xD9zs6FwLpaCct6O9ctzYFfFr4dgmgccOTx" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
          // customised options
          // • auto-render specific keys, e.g.:
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
              {left: '\\(', right: '\\)', display: false},
              {left: '\\[', right: '\\]', display: true}
          ],
          // • rendering keys, e.g.:
          throwOnError : false
        });
    });
</script>

</head>
  
  <body class="light">
  
  <?php include "includes/headernav.php"; ?>
  
  
  <main>
    <div class="sisu-konteiner">
    <h2>$\text{\LaTeX written text}$. Non LaTeX written text.</h2>
    <p>Võtame vaatluse alla süsteemi, kus meil on fikseeritud vedru elastsuskoefitsendiga $k$, 
      ning vedru otsas on keha massiga $m$. Vedru otsas tasakaaluasendis olevale kuulikesele massiga
       $m$ mõjub vaid üks väline jõud, näiteks raskusjõud $mg$. Tasakaalu oleku säilitamiseks mõjub seega 
       vedrule ka elastsusjõud $k \Delta l_{0}$, ehk $$ mg=k \Delta l_{0}. \tag{1}$$<br><br>Kui vedru otsas olevat
       kuulikest nihutatakse tasakaaluolekust $x$ võrra kõrvale, siis pikeneb vedru $\Delta l_{0}+x$ võrra, mille
        tagajärjel meie $x-$teljele langev resultantjõu projektsioon omandab kuju $$F=mg-k(\Delta l_{0}+x). \tag{2}$$<br>
        Arvestades valemit (1), saame $$ F=-kx.\tag{3} $$<br>Keha nihutamiseks tuleb teha tööd $$A=\dfrac{kx^{2}}{2}, \tag{4}$$
        mis saab ka meie potentsiaalseks energiaks $$ E_{p}=\dfrac{kx^{2}}{2}. \tag{5} $$<br>Kineetilist energiat arvutame aga $$ E_{k}=\dfrac{mv^{2}}{2}. \tag{6} $$
        
        <br>Meie töös on vaja luua keha liikumise kirjeldamiseks liikumisvõrrand. Kirjutades võrrand (3) ümber 
        Newtoni teise seaduse jaoks ning jagades mõlemad võrduse pooled keha massiga $m$ läbi, siis saame $$ \ddot{x}+\dfrac{k}{m}x=0, \tag{7} $$
        mis on teistjärku lineaarne homogeenne konstantsete kordajatega diferentsiaalvõrrand. Oma mudelites kasutame diferentsiaalvõrrandite
         integreerimiseks neljandat järku Runge-Kutta (edaspidi RK4) algoritmi, mis suudab integreerida vaid esimest järku 
         võrrandeid, siis tuleb meil konstrueerida esimest järku võrrandite süsteem. Asendades $ \dfrac{k}{m}=\omega^{2} $ ning $ \ddot{x}=\dot{v_{x}} $,
         konsutreerime kaks esimestjärku diferentsiaalvõrrandit $$ \begin{cases}
    \dot{x}=v_{x} \\
    \dot{v_{x}}=-\omega^{2}\cdot x
\end{cases}  $$, mida lahendame numbriliselt RK4 meetodiga, mis näeb välja nõnda
  $$ y(x+h)=y(x)+CH(1)\cdot k_{1} +CH(2) \cdot k_{2} +CH(3) \cdot k_{3} +CH(4) \cdot k_{4} + CH(5) \cdot k_{5} +CH(6) \cdot k_{6}, \tag{8}$$
<br>
kus $k_{1}$, $k_{2}$ ... ja $k_{6}$ on järgmised arvutatavad koefitsendid
  $$ \begin{array}{l}
  k_{1}=h \cdot f(x+A(1) \cdot h, y)\\
  k_{2}=h \cdot f(x+A(2) \cdot h, y +B(2,1) \cdot k_{1})\\
  k_{3}=h \cdot f(x+A(3) \cdot h, y +B(3,1) \cdot k_{1} + B(3,2) \cdot k_{2} )\\
  k_{4}=h \cdot f(x+A(4) \cdot h, y +B(4,1) \cdot k_{1} + B(4,2) \cdot k_{2}+B(4,3) \cdot k_{3} )\\
  k_{5}=h \cdot f(x+A(5) \cdot h, y +B(5,1) \cdot k_{1} + B(5,2) \cdot k_{2}+B(5,3) \cdot k_{3} + B(5,4) \cdot k_{4} )\\
  k_{6}=h \cdot f(x+A(6) \cdot h, y +B(6,1) \cdot k_{1} + B(6,2) \cdot k_{2}+B(6,3) \cdot k_{3} + B(6,4) \cdot k_{4}  + B(6,5) \cdot k_{5} )
  \end{array} $$
<br> ning $A(k,n)$, $B(k,n)$ ja $CH(k)$ on Fehlbergi poolt tuletatud koefitsendid ning on leitavad <a href="https://ntrs.nasa.gov/api/citations/19690021375/downloads/19690021375.pdf" target="_blank" rel="noopener noreferrer">1969 NASA raportist</a>.

 Sumbuvad võnkumised erinevad vabavõngetest selle poolest, et neile mõjub veel väline takistusjõud, 
 mille tagajärjel võnkuv keha kaotab energiat. Väikeste kiiruste puhul on takistusjõud võrdeline keha kiirusega.</p>
  </div>
  <div class="sketch-container" id="HV_sim_sketch" style="height:700px">
          <script language="javascript" type="text/javascript" src="Harmoonilised_vonkumised.js"></script>
  </div>
  <div class="sisu-konteiner">
    <h2>$\text{\LaTeX written text}$. Non LaTeX written text.</h2>
    <p>Võtame vaatluse alla süsteemi, kus meil on fikseeritud vedru elastsuskoefitsendiga $k$, 
      ning vedru otsas on keha massiga $m$. Vedru otsas tasakaaluasendis olevale kuulikesele massiga
       $m$ mõjub vaid üks väline jõud, näiteks raskusjõud $mg$. Tasakaalu oleku säilitamiseks mõjub seega 
       vedrule ka elastsusjõud $k \Delta l_{0}$, ehk $$ mg=k \Delta l_{0}. \tag{1}$$<br><br>Kui vedru otsas olevat
       kuulikest nihutatakse tasakaaluolekust $x$ võrra kõrvale, siis pikeneb vedru $\Delta l_{0}+x$ võrra, mille
        tagajärjel meie $x-$teljele langev resultantjõu projektsioon omandab kuju $$F=mg-k(\Delta l_{0}+x). \tag{2}$$<br>
        Arvestades valemit (1), saame $$ F=-kx.\tag{3} $$<br>Keha nihutamiseks tuleb teha tööd $$A=\dfrac{kx^{2}}{2}, \tag{4}$$
        mis saab ka meie potentsiaalseks energiaks $$ E_{p}=\dfrac{kx^{2}}{2}. \tag{5} $$<br>Kineetilist energiat arvutame aga $$ E_{k}=\dfrac{mv^{2}}{2}. \tag{6} $$
        
        <br>Meie töös on vaja luua keha liikumise kirjeldamiseks liikumisvõrrand. Kirjutades võrrand (3) ümber 
        Newtoni teise seaduse jaoks ning jagades mõlemad võrduse pooled keha massiga $m$ läbi, siis saame $$ \ddot{x}+\dfrac{k}{m}x=0, \tag{7} $$
        mis on teistjärku lineaarne homogeenne konstantsete kordajatega diferentsiaalvõrrand. Oma mudelites kasutame diferentsiaalvõrrandite
         integreerimiseks neljandat järku Runge-Kutta (edaspidi RK4) algoritmi, mis suudab integreerida vaid esimest järku 
         võrrandeid, siis tuleb meil konstrueerida esimest järku võrrandite süsteem. Asendades $ \dfrac{k}{m}=\omega^{2} $ ning $ \ddot{x}=\dot{v_{x}} $,
         konsutreerime kaks esimestjärku diferentsiaalvõrrandit $$ \begin{cases}
    \dot{x}=v_{x} \\
    \dot{v_{x}}=-\omega^{2}\cdot x
\end{cases}  $$, mida lahendame numbriliselt RK4 meetodiga, mis näeb välja nõnda
  $$ y(x+h)=y(x)+CH(1)\cdot k_{1} +CH(2) \cdot k_{2} +CH(3) \cdot k_{3} +CH(4) \cdot k_{4} + CH(5) \cdot k_{5} +CH(6) \cdot k_{6}, \tag{8}$$
<br>
kus $k_{1}$, $k_{2}$ ... ja $k_{6}$ on järgmised arvutatavad koefitsendid
  $$ \begin{array}{l}
  k_{1}=h \cdot f(x+A(1) \cdot h, y)\\
  k_{2}=h \cdot f(x+A(2) \cdot h, y +B(2,1) \cdot k_{1})\\
  k_{3}=h \cdot f(x+A(3) \cdot h, y +B(3,1) \cdot k_{1} + B(3,2) \cdot k_{2} )\\
  k_{4}=h \cdot f(x+A(4) \cdot h, y +B(4,1) \cdot k_{1} + B(4,2) \cdot k_{2}+B(4,3) \cdot k_{3} )\\
  k_{5}=h \cdot f(x+A(5) \cdot h, y +B(5,1) \cdot k_{1} + B(5,2) \cdot k_{2}+B(5,3) \cdot k_{3} + B(5,4) \cdot k_{4} )\\
  k_{6}=h \cdot f(x+A(6) \cdot h, y +B(6,1) \cdot k_{1} + B(6,2) \cdot k_{2}+B(6,3) \cdot k_{3} + B(6,4) \cdot k_{4}  + B(6,5) \cdot k_{5} )
  \end{array} $$
<br> ning $A(k,n)$, $B(k,n)$ ja $CH(k)$ on Fehlbergi poolt tuletatud koefitsendid ning on leitavad <a href="https://ntrs.nasa.gov/api/citations/19690021375/downloads/19690021375.pdf" target="_blank" rel="noopener noreferrer">1969 NASA raportist</a>.

 Sumbuvad võnkumised erinevad vabavõngetest selle poolest, et neile mõjub veel väline takistusjõud, 
 mille tagajärjel võnkuv keha kaotab energiat. Väikeste kiiruste puhul on takistusjõud võrdeline keha kiirusega.</p>
  </div>
  </main>
  </body>
</html>
