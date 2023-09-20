var randomNumber1=Math.floor(Math.random()*6)+1;
var imgElements = document.getElementsByClassName("img1");

if (randomNumber1 == 1)
  imgElements[0].src = "./images/dice1.png";
else if (randomNumber1 == 2)
  imgElements[0].src = "./images/dice2.png";
else if (randomNumber1 == 3)
  imgElements[0].src = "./images/dice3.png";
else if (randomNumber1 == 4)
  imgElements[0].src = "./images/dice4.png";
else if (randomNumber1 == 5)
  imgElements[0].src = "./images/dice5.png";
else
  imgElements[0].src = "./images/dice6.png";


var randomNumber2=Math.floor(Math.random()*6)+1;
var imgElements2 = document.getElementsByClassName("img2");
  
if (randomNumber2 == 1)
    imgElements2[0].src = "./images/dice1.png";
else if (randomNumber2 == 2)
    imgElements2[0].src = "./images/dice2.png";
else if (randomNumber2 == 3)
    imgElements2[0].src = "./images/dice3.png";
else if (randomNumber2 == 4)
    imgElements2[0].src = "./images/dice4.png";
else if (randomNumber2 == 5)
    imgElements2[0].src = "./images/dice5.png";
else
    imgElements2[0].src = "./images/dice6.png";


var heading=document.querySelector("h1");

if(randomNumber1==randomNumber2)
     heading.textContent = "Draw!";
else if(randomNumber1>randomNumber2)
    heading.textContent="Player 1 wins!";
else heading.textContent="Player 2 wins!"; 