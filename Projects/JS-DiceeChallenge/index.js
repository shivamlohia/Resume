var randomNumber1 = Math.ceil(Math.random() * 6);

var randomeDice1 = "dice" + randomNumber1 + ".png";

var randomNumber2 = Math.ceil(Math.random() * 6);

var randomeDice2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = "./images/" + randomeDice1;
document.querySelector(".img2").src = "./images/" + randomeDice2;

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}