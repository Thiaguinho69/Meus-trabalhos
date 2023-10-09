# Meus-trabalhos
# Meus-trabalhos


Guessing Game with Random Bot in JavaScript and HTML
Welcome to our exciting guessing game! In this project, we will create a simple yet fun game that allows players to guess a number and then checks if they guessed correctly using JavaScript and HTML. Additionally, we will add a special twist to the game by introducing a random bot that will also try to guess the correct number.

Game Objective
The objective of this game is to guess a secret number within a predefined range. The human player will attempt to guess the number, and the random bot will do the same. The player who correctly guesses the number first will be the winner!

Technologies Used
HTML: To create the structure of the web page.
JavaScript: To manage the game logic, including generating random numbers and interacting with the player.

Game Instructions
The human player enters a guess in the input field.
The human player clicks the "Guess" button to confirm the guess.
The random bot also makes a random guess when clicking the "Guess" button.
The game checks if the player's or the bot's guess matches the secret number.
If the human player or the bot guesses correctly, the game displays a victory message and ends.


Code Structure


HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <center>
<h1>coloque o numero aqui</h1>
<br>
<div style="font-size: 30px;"> numero de tentativas<div id="tentativa">0</div></div>
<br>
<input id="jogador" type="number"  style="font-size:30px ;">
<br>
<br>
<button onclick="marco()">jogar</button>
<br>
<br>
<br>
<br>
<button onclick="reiniciar()">reiniciar partida</button>
<div id="res" style="font-size:30px ;"></div>

    </center>
</body>
</html>
<script src="main.js"></script>





Javascript


var tentativa=0
var bot
bot=Math.floor(Math.random()*11)
function marco(params) {
    tentativa++
   document.getElementById("tentativa").innerHTML=tentativa
   
    var jogador 
    jogador=document.getElementById("jogador").value

if (bot<jogador) {
    document.getElementById("res").innerText="seu numero é maior que o número sorteado"
}
if (bot>jogador) {
    document.getElementById("res").innerText="seu numero é menor que o número sorteado"
}

if (bot==jogador && tentativa==1) {
    document.getElementById("tentativa").innerHTML=tentativa-=tentativa
    document.getElementById("res").innerHTML="você ganhou 🥇 nessa partida."+"<br>"+" digite um novo número para a proxima rodada"
   
   
}
if (bot==jogador && tentativa==2) {
    document.getElementById("tentativa").innerHTML=tentativa-=tentativa
    document.getElementById("res").innerHTML="você ganhou 🥈 nessa partida"+"<br>"+"digite um novo número para a proxima rodada"
   
  
}
if (bot==jogador && tentativa==3) {
    document.getElementById("res").innerHTML=" você ganhou 🥉 nessa partida"+"<br>"+"aperte o botão para a proxima rodada"
}
if (bot!=jogador && tentativa==3) {
    document.getElementById("res").innerHTML="perdeu,tente de novo. O numero era  "+bot+"."+"<br>"+"aperte o botão para a proxima rodada"
    
}

if (tentativa==4) {
    document.getElementById("tentativa").innerHTML=tentativa-=tentativa
    document.getElementById("res").innerHTML="proxima rodada"+"<br>"+"digite seu número"

}
}

function reiniciar(params) {
    bot=Math.floor(Math.random()*11)
    document.getElementById("res").innerHTML="      "
    document.getElementById("tentativa").innerHTML=tentativa-=tentativa
    console.log(bot)
}
