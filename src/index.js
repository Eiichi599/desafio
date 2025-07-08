let nome = prompt("Qual seu nome?")
let xp = parseInt(prompt("Qual sua quantidade de xp ?"))
rank = "";
if (xp < 1000){
    rank = "Ferro";
}else if (xp <= 2000){
    rank = "Bronze"
}else if (xp <= 5000){
    rank = "Prata"
}else if (xp <= 7000){
    rank = "Ouro"
}else if (xp <= 8000){
    rank = "Platina"
}else if (xp <= 9000){
    rank = "Ascendente"
}else if (xp <= 10000){
    rank = "Imortal"
}else {
    rank = "Radiante"
}

console.log(`O heroi de nome ${nome} esta no nivel de ${rank}`)