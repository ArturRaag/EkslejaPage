<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="several_sketches.css">
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

<!-- for multi P5JS sketch!!! --->
<script language="javascript" type="text/javascript" src="perlin_noise/perlinNoise3D.js"></script>

</head>
  
<body class="light">
  
  <?php include "includes/headernav.php"; ?>
  
  
  <main>
    <div class="sisu-konteiner">
    <h1>Mürafunktsioonid ja nende rakendus (pooleli/Unfinished)</h1>
    <p>Et modelleerida keha liikumist ümber valitud taevakeha tuleb meil leida kuidas keha koordinaadid
       x, y ja kiirusvektorid Vx, Vy sõltuvad ajast ning millised on keha kineetiline, potentsiaalne
        ning koguenergia erinevatel ajahetkedel.

      Kui me eeldame, et satelliit kehale mõjub vaid gravitatsiooni jõud, siis saame Newtoni teise seaduse
       kaudu avaldada liikumisvõrrandi nagu eelnevaltki.
      </p>
  </div>



  <div class="sisu-konteiner">
    <h2>Mittekoherentne müra 1D</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>

  <div class="sketch-container" id="sketch-container1" style="height:100px">
  <img src="perlin_noise\p5GIFS_perlin\1_random_walk_1D.gif" alt="Animated Gif">        
  <!-- <script language="javascript" type="text/javascript" src="perlin_noise\random_noise_1D.js"></script> -->
  </div>

  
  <div class="sisu-konteiner">
  <h2>Perlini müra 1D</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>

  <div class="sketch-container" id="sketch-container2" style="height:100px" >
  <img src="perlin_noise\p5GIFS_perlin\2_perlin_walk_1D.gif" alt="Animated Gif">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>


    
  <div class="sisu-konteiner">
  <h2>Perlin müra 2D</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container3" style="height:100px" >
  <img src="perlin_noise\p5GIFS_perlin\3_Perlini_2D_maastik.gif" alt="Animated Gif">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>


  <div class="sisu-konteiner">
  <h2>Mittekoherentne müra 2D</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container4" style="height:100px" >
  <img src="perlin_noise\p5GIFS_perlin\4_random_2D_maastik.gif" alt="Animated Gif">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>


  <div class="sisu-konteiner">
  <h2>Perlin müra 2D</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container4" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\5_white_random_noise.gif" alt="Animated Gif">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>


  <div class="sisu-konteiner">
  <h2>Mittekoherentne müra graafik</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container5" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\6_white_Perlin_noise.gif" alt="Animated Gif">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>

  <div class="sisu-konteiner">
  <h2>Perlini müra graafik</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container6" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\7_random_white_noise_LowResolution.png" alt="Static PNG image">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>

  
  <div class="sisu-konteiner">
  <h2>Perlini müra sõltuvus inkremendist</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container7" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\8_white_Perlin_noise_LowResolution.png" alt="Static PNG image">   
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>


  <div class="sisu-konteiner">
  <h2>Generatiivne Perlini maastik 1D kujul</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container8" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\9_random_2D_vectorField.gif" alt="Animated Gif"> 
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>

  <div class="sisu-konteiner">
  <h2>Generatiivne mittekoherentne maastik 1D kujul</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container9" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\10_perlin_vectorField_SLICE.png" alt="Static PNG image"> 
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>



  <div class="sisu-konteiner">
  <h2>Generatiivne mittekoherentne maastik 1D kujul</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.
      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container10" style="height:200px" >
  <img src="perlin_noise\p5GIFS_perlin\11_perlin_vectorField_withZ_axis.gif" alt="Animated Gif"> 
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>


  <div class="sisu-konteiner">
  <h2>Generatiivne mittekoherentne maastik 2D kujul</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container11" style="height:340px">
  <video controls width="600" height="340" loop autoplay muted>
  <source src="perlin_noise\p5GIFS_perlin\12_PerlinNoiseFlowField.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>

  <div class="sisu-konteiner">
  <h2>Generatiivne mittekoherentne maastik 1D kujul</h2>
    <p>Eeldusel, et meie süsteemi koordinaatteljestik fikseeritakse ligikaudu taevakeha keskpunktis,
       siis ei saa meie satelliidi kaugus taevakeha tsentrist olla väiksem kui taevakeha raadius ise.
      Lisaks, kuna meie mudelis eeldame, et satelliit alustab enda liikumist juba taevakeha orbiidist, siis
       peaks satelliidi kauguse moodul olema suurem või võrdne taevakeha raadiuse ja orbiidi kõrguse mooduli summaga.

      Samuti on tarvis leida sobiv algne kiirus, sest kui algkiirus on liiga väike, langeb satelliit taevakeha
       pinnale. Liiga suurt kiirust ei saa ka valida, kuna sellisel juhul lendab satelliit hoopis taevakeha 
       mõjusfäärist/orbiidist välja. Seega algtingimused arvutame selles ülesandes ette ära, et tagada mudeli töökindlust.
      
      </p>
  </div>
  <div class="sketch-container" id="sketch-container12" style="height:500px" >
          <!-- <script language="javascript" type="text/javascript" src="perlin_noise\perlin_noise_1D.js"></script> -->
  </div>

  </main>
  </body>
</html>

