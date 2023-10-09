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
