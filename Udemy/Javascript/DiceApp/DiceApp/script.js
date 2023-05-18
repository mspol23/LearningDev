



let playerOneName = prompt("Enter player 1 name:");
let playerTwoName = prompt("Enter player 2 name:");

let addPlayer1 = document.querySelector(".playerOne");
addPlayer1.innerText = playerOneName;

let addPlayer2 = document.querySelector(".playerTwo");
addPlayer2.innerText = playerTwoName;

let bodyTag = document.querySelector("body");
bodyTag.addEventListener('keypress', rollDice);

function rollDice() {
   let dice1Number = Math.floor((Math.random() * 6) + 1)
   console.log(dice1Number)
   let dice2Number = Math.floor((Math.random() * 6) + 1)

/* Winner message. */   
    let message = document.querySelector("header");

    if (dice1Number > dice2Number) {
        message.innerText = `${playerOneName} Win!`;
        message.classList.add("winnerAnnounce"); 

    } else if (dice2Number > dice1Number) {
        message.innerText = `${playerTwoName} Win!`;  
        message.classList.add("winnerAnnounce");     
    } else {
        message.innerText = "Draw!"  
        message.classList.add("winnerAnnounce"); 
    }

/* ********* DICE 1 ********** */
    let diceDot1 = document.querySelector('.diceDot1');
    let diceDot2 = document.querySelector('.diceDot2');
    let diceDot3 = document.querySelector('.diceDot3');
    let diceDot4 = document.querySelector('.diceDot4');
    let diceDot5 = document.querySelector('.diceDot5');
    let diceDot6 = document.querySelector('.diceDot6');
    let diceDot7 = document.querySelector('.diceDot7');

/* ********* DICE 2 ********** */
    let diceDot8 = document.querySelector('.diceDot8');
    let diceDot9 = document.querySelector('.diceDot9');
    let diceDot10 = document.querySelector('.diceDot10');
    let diceDot11 = document.querySelector('.diceDot11');
    let diceDot12 = document.querySelector('.diceDot12');
    let diceDot13 = document.querySelector('.diceDot13');
    let diceDot14 = document.querySelector('.diceDot14');

/* ********* DICE 1 LOGIC ********** */
   if (dice1Number === 1) {
        
        diceDot1.style.visibility = "hidden";
        diceDot2.style.visibility = "hidden"; 
        diceDot3.style.visibility = "hidden";  
        diceDot4.style.visibility = "visible";  
        diceDot5.style.visibility = "hidden"; 
        diceDot6.style.visibility = "hidden"; 
        diceDot7.style.visibility = "hidden";

        
   } else if (dice1Number === 2) {

        diceDot1.style.visibility = "hidden";
        diceDot2.style.visibility = "hidden";
        diceDot3.style.visibility = "visible";
        diceDot4.style.visibility = "hidden";
        diceDot5.style.visibility = "visible";
        diceDot6.style.visibility = "hidden";
        diceDot7.style.visibility = "hidden";

    } else if (dice1Number === 3) {

        diceDot1.style.visibility = "hidden";
        diceDot2.style.visibility = "hidden";
        diceDot3.style.visibility = "visible";
        diceDot4.style.visibility = "visible";
        diceDot5.style.visibility = "visible";
        diceDot6.style.visibility = "hidden";
        diceDot7.style.visibility = "hidden";

    } else if (dice1Number === 4) {

        diceDot1.style.visibility = "visible";
        diceDot2.style.visibility = "hidden";
        diceDot3.style.visibility = "visible";
        diceDot4.style.visibility = "hidden";
        diceDot5.style.visibility = "visible";
        diceDot6.style.visibility = "hidden";
        diceDot7.style.visibility = "visible";

    } else if (dice1Number === 5) {

        diceDot1.style.visibility = "visible";
        diceDot2.style.visibility = "hidden";
        diceDot3.style.visibility = "visible";
        diceDot4.style.visibility = "visible";
        diceDot5.style.visibility = "visible";
        diceDot6.style.visibility = "hidden";
        diceDot7.style.visibility = "visible";

    } else if (dice1Number === 6) {

        diceDot1.style.visibility = "visible";
        diceDot2.style.visibility = "visible";
        diceDot3.style.visibility = "visible";
        diceDot4.style.visibility = "hidden";
        diceDot5.style.visibility = "visible";
        diceDot6.style.visibility = "visible";
        diceDot7.style.visibility = "visible";
}

/* ********* DICE 2 LOGIC ********** */

    if (dice2Number === 1) {

        diceDot8.style.visibility = "hidden";
        diceDot9.style.visibility = "hidden";
        diceDot10.style.visibility = "hidden";
        diceDot11.style.visibility = "visible";
        diceDot12.style.visibility = "hidden";
        diceDot13.style.visibility = "hidden";
        diceDot14.style.visibility = "hidden";
    } else if (dice2Number === 2) {

        diceDot8.style.visibility = "hidden";
        diceDot9.style.visibility = "hidden";
        diceDot10.style.visibility = "visible";
        diceDot11.style.visibility = "hidden";
        diceDot12.style.visibility = "visible";
        diceDot13.style.visibility = "hidden";
        diceDot14.style.visibility = "hidden";
    } else if (dice2Number === 3) {

        diceDot8.style.visibility = "hidden";
        diceDot9.style.visibility = "hidden";
        diceDot10.style.visibility = "visible";
        diceDot11.style.visibility = "visible";
        diceDot12.style.visibility = "visible";
        diceDot13.style.visibility = "hidden";
        diceDot14.style.visibility = "hidden";
    } else if (dice2Number === 4) {

        diceDot8.style.visibility = "visible";
        diceDot9.style.visibility = "hidden";
        diceDot10.style.visibility = "visible";
        diceDot11.style.visibility = "hidden";
        diceDot12.style.visibility = "visible";
        diceDot13.style.visibility = "hidden";
        diceDot14.style.visibility = "visible";
    } else if (dice2Number === 5) {

        diceDot8.style.visibility = "visible";
        diceDot9.style.visibility = "hidden";
        diceDot10.style.visibility = "visible";
        diceDot11.style.visibility = "visible";
        diceDot12.style.visibility = "visible";
        diceDot13.style.visibility = "hidden";
        diceDot14.style.visibility = "visible";
    } else if (dice2Number === 6) {

        diceDot8.style.visibility = "visible";
        diceDot9.style.visibility = "visible";
        diceDot10.style.visibility = "visible";
        diceDot11.style.visibility = "hidden";
        diceDot12.style.visibility = "visible";
        diceDot13.style.visibility = "visible";
        diceDot14.style.visibility = "visible";
    }

}




