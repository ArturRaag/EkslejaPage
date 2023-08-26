
<!DOCTYPE html>
<html>
  <head>


  <link rel="stylesheet" href="main.css">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Eksleja</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js"></script>
  
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  
  <img src="https://www.eksleja.ee/images/eksleja.jpg" alt="Eksleja" hidden>
  
  
        <!-- Open Graph meta tags -->
       <meta property="og:title" content="Eksleja">
       <meta property="og:description" content="This is a description of my website.">
       <meta property="og:image" content="https://www.eksleja.ee/images/eksleja.jpg">
       <meta property="og:url" content="https://eksleja.ee">
       <meta property="og:type" content="website">
       <meta property="og:image:crop" content="16:9">
       
           <!--  ######################## KaTeX kraam  algus ############################################# -->
    
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css" integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB" crossorigin="anonymous">
    
           <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js" integrity="sha384-0fdwu/T/EQMsQlrHCCHoH10pkPLlKA1jL5dFyUOvB3lfeT2540/2g6YgSi2BL14p" crossorigin="anonymous"></script>
           
             <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous"
               onload="renderMathInElement(document.body);"></script>
           
             <!--  ######################## KaTeX kraam  lõpp ############################################# -->
  </head>
  
  <body class="light">
  
  <?php include "includes/headernav.php"; ?>
  
  
  
  <main>
    <div class="sisu-konteiner">
    <h2>3D roos sfäärilsite koordinaatidega (pooleli)</h2>
    <p>Põhineb Kazuki Umeda tööl.<br><br>Kujutist saab hiirega peale klõpsates liigutada.
      </p>
  </div>
  <div class="sketch-container" id="rose_sketch" style="height:800px">
          <script language="javascript" type="text/javascript" src="rose.js"></script>
  </div>

  <div class="sisu-konteiner">
    <p>---- TÄIENDUSED TULEVAD HILJEM ----
      </p>
  </div>
  
  </main>
  </body>
</html>