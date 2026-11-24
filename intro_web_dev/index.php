 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RedBullCarWebshop</title>
    <link rel="stylesheet" type="text/css" href="stylesheet/style.css">
 </head>
 <body>
 

<?php
 include "includes/deatail.php";
// Verbinding met de database. Dit bestand hoef je niet aan te passen.
$pdo = new PDO("mysql:host=mysql_db;dbname=webshop;charset=utf8mb4", "root", "root");
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
?>


 <main>
<p>Bij ons vind je alle auto's die door de Red Bull brand zijn ontwikkeld en gelicensed.</p> 
<div class="producten">

     <!-- Red Bull 1 -->
  <div class="card">
   
   <img src="images/rb1.jpg" alt="Red Bull 1" width="450">
   <h2>RB1</h2> 
   <h3>&euro; 3.000.000,-</h3>
   <a href="rb1.html">Bekijk</a>
</div>

<!-- Red Bull 2 -->
 <div class="card">

 <img src="images/rb2.jpeg" alt="Red Bull 2" width="450">
 <h2>RB2</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb2.html">Bekijk</a>
 </div>
<!-- Red Bull 3 -->
 <div class="card">
 
 <img src="images/rb3.avif" alt="Red Bull 3" width="450">
 <h2>RB3</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb3.html">Bekijk</a>
 </div>
 <!-- Red Bull 4 -->
 <div class="card">

 <img src="images/rb4.jpg" alt="Red Bull 4" width="450">
 <h2>RB4</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb4.html">Bekijk</a>
 </div>
 <!-- Red Bull 5 -->
 <div class="card">
 
 <img src="images/rb5.webp" alt="Red Bull 5" width="450">
 <h2>RB5</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb5.html">Bekijk</a>
 </div>
 <!-- Red Bull 6 -->
 <div class="card">
 
 <img src="images/rb6.jpg" alt="Red Bull 6" width="450">
 <h2>RB6(Championshipwinning car)</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb6.html">Bekijk</a>
 </div>
 <!-- Red Bull 7 -->
 <div class="card">
 
 <img src="images/rb7.jpg" alt="Red Bull 7">
 <h2>RB7(Championshipwinning car)</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb7.html">Bekijk</a>
 </div>
  <!-- Red Bull 8 -->
 <div class="card">

 <img src="images/rb8.jpg" alt="Red Bull 8">
 <h2>RB8(Championshipwinning car)</h2>
<h3>&euro; 5.000.000,-</h3>
<a href="rb8.html">Bekijk</a>
 </div>
   <!-- Red Bull 9 -->
 <div class="card">
 
 <img src="images/rb9.jpeg" alt="Red Bull 9">
 <h2>RB9(Championshipwinning car) </h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb9.html">Bekijk</a>
 </div>
    <!-- Red Bull 10 -->
 <div class="card">
 
 <img src="images/rb10.webp" alt="Red Bull 10">
 <h2>RB10</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb10.html">Bekijk</a>
 </div>
    <!-- Red Bull 11 -->
 <div class="card">
 
 <img src="images/rb11.jpg" alt="Red Bull 11">
 <h2>RB11</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb11.html">Bekijk</a>
 </div>
    <!-- Red Bull 12 -->
 <div class="card">

 <img src="images/rb12.jpg" alt="Red Bull 12">
 <h2>RB12</h2>
<h3>&euro; 10.000.000,-</h3>
<a href="rb12.html">Bekijk</a>
 </div>
    <!-- Red Bull 13 -->
 <div class="card">
 
 <img src="images/rb13.avif" alt="Red Bull 13">
 <h2>RB13</h2>
<h3>&euro; 3.000.000,-</h3>
<a href="rb13.html">Bekijk</a>
 </div>
    <!-- Red Bull 14 -->
 <div class="card">
 
 <img src="images/rb14.png" alt="Red Bull 14">
 <h2>RB14</h2>
<h3>&euro; 7.000.000,-</h3>
<a href="rb14.html">Bekijk</a>
 </div>
    <!-- Red Bull 15 -->
 <div class="card">
 
 <img src="images/rb15.avif" alt="Red Bull 15">
 <h2>RB15</h2>
<h3>&euro; 20.000.000,-</h3>
<a href="rb15.html">Bekijk</a>
 </div>
    <!-- Red Bull 16 -->
 <div class="card">

 <img src="images/rb16.jpeg" alt="Red Bull 16">
 <h2>RB16</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb16.html">Bekijk</a>
 </div>
    <!-- Red Bull 16B -->
 <div class="card">
 
 <img src="images/rb16b.jpeg" alt="Red Bull 16B">
 <h2>RB16B</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb16b.html">Bekijk</a>
 </div>
    <!-- Red Bull 18 -->
 <div class="card">

 <img src="images/rb18.webp" alt="Red Bull 18">
 <h2>RB18(Championshipwinning car)</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb18.html">Bekijk</a>
 </div>
    <!-- Red Bull 19 -->
 <div class="card">
 
 <img src="images/rb19.jpg" alt="Red Bull 19">
 <h2>RB19(Championshipwinning car)</h2>
<h3>&euro; 16.000.000,-</h3>
<a href="rb19.html">Bekijk</a>
 </div>
    <!-- Red Bull 20 -->
 <div class="card">
 
 <img src="images/rb20.png" alt="Red Bull 20">
 <h2>RB20</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb20.html">Bekijk</a>
 </div>
    <!-- Red Bull 21 -->
 <div class="card">

 <img src="images/rb21.png" alt="Red Bull 21">
 <h2>RB21</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb21.html">Bekijk</a>
 </div>
    <!-- Red Bull 22 -->
 <div class="card">
 
 <img src="images/rb22.jpg" alt="Red Bull 22">
 <h2>RB22</h2>
<h3>&euro; 15.000.000,-</h3>
<a href="rb22.html">Bekijk</a>
 </div>
    <!-- Red Bull 17 -->
 <div class="card">
 
 <img src="images/rb17.jpg" alt="Red Bull 17">
 <h2>RB17</h2>
<h3>&euro; 5.000.000,-</h3>
<a href="rb17.html">Bekijk</a>
 </div>
    <!-- Red Bull Mini Cooper -->
 <div class="card">
 
 <img src="images/redbullmini.jpg" alt="Red Bull Mini Cooper">
 <h2>Red Bull Mini Cooper</h2>
<h3>&euro; 40.000,-</h3>
<a href="rbmini.html">Bekijk</a>
 </div>
    <!-- Aston Martin Valkyrie -->
 <div class="card">
 
 <img src="images/amv.webp" alt="Aston Martin Valkyrie">
 <h2>Aston Martin Valkyrie</h2>
<h3>&euro; 3.500.000,-</h3>
<a href="amv.html">Bekijk</a>
 </div>
</div>
</main>
 </body>
 </html>