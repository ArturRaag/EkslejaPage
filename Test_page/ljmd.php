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
  
  </head>
  
  <body class="light">
  
  <?php include "includes/headernav.php"; ?>
  
  
  
  <main>
    <div class="sisu-konteiner">
    <h2>Molekulaardünaamika kasutades Lennard-Jones'i potentsiaali (pooleli)</h2>
    <p>Molekulaardünaamika ülesande realiseerimiseks on vaja kasutada sobivat potentsiaal 
      funktsiooni, mis kirjeldab osakeste vahel mõjuvaid jõudusid.  Meie töös kasutame 
      selle jaoks kõige lihtsamat potentsiaali, milleks on Lennard-Jones’i potentsiaal,
       mis iseloomustab van der Waalsi jõudusid ning mis sõltub vaid osakeste vahelisest 
       kaugusest.  Lennard-Jones’i potentsiaal sisaldab kahte liiget, millest esimene on 
       väga tugev tõuke ja teine veidi nõrgem tõmbejõud [9]. Kahe osakese vahelise kauguse 
       suurenemisel, muutub nende osakeste vaheline jõud väga kiiresti triviaalseks. See on
        märkimist väärt, kuna saame antud teadmist oma mudelis rakendada simulatsiooni 
        arvutuskiiruse hõlbustamiseks.
      </p>
  </div>
  <div class="sketch-container" id="LJP_sim_sketch" style="height:800px">
          <script language="javascript" type="text/javascript" src="LJP_MD.js"></script>
  </div>

  <div class="sisu-konteiner">
    <p>----POOLELI-----
      </p>
  </div>
  
  </main>
  </body>
</html>