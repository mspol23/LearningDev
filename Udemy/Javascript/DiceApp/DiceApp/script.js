// Announce

function announce() {

}

let bodyTag = document.querySelector("body");

bodyTag.addEventListener('Click', rollDice)

function rollDice() {
   let dice1Number = 6 //Math.floor((Math.random() * 6) + 1)
   console.log(dice1Number)
   let dice2Number = 1 //Math.floor((Math.random() * 6) + 1)
   
/* ********* DICE 1 ********** */

   if (dice1Number === 1) {

        let diceDot1 = document.querySelector('.diceDot1');
        diceDot1.style.visibility = "hidden";
        let diceDot2 = document.querySelector('.diceDot2');
        diceDot2.style.visibility = "hidden";
        let diceDot3 = document.querySelector('.diceDot3');
        diceDot3.style.visibility = "hidden";
        let diceDot4 = document.querySelector('.diceDot4');
        diceDot4.style.visibility = "visible";
        let diceDot5 = document.querySelector('.diceDot5');
        diceDot5.style.visibility = "hidden";
        let diceDot6 = document.querySelector('.diceDot6');
        diceDot6.style.visibility = "hidden";
        let diceDot7 = document.querySelector('.diceDot7');
        diceDot7.style.visibility = "hidden";

        
   } else if (dice1Number === 2) {

        let diceDot1 = document.querySelector('.diceDot1');
        diceDot1.style.visibility = "hidden";
        let diceDot2 = document.querySelector('.diceDot2');
        diceDot2.style.visibility = "hidden";
        let diceDot3 = document.querySelector('.diceDot3');
        diceDot3.style.visibility = "visible";
        let diceDot4 = document.querySelector('.diceDot4');
        diceDot4.style.visibility = "hidden";
        let diceDot5 = document.querySelector('.diceDot5');
        diceDot5.style.visibility = "visible";
        let diceDot6 = document.querySelector('.diceDot6');
        diceDot6.style.visibility = "hidden";
        let diceDot7 = document.querySelector('.diceDot7');
        diceDot7.style.visibility = "hidden";

    } else if (dice1Number === 3) {

        let diceDot1 = document.querySelector('.diceDot1');
        diceDot1.style.visibility = "hidden";
        let diceDot2 = document.querySelector('.diceDot2');
        diceDot2.style.visibility = "hidden";
        let diceDot3 = document.querySelector('.diceDot3');
        diceDot3.style.visibility = "visible";
        let diceDot4 = document.querySelector('.diceDot4');
        diceDot4.style.visibility = "visible";
        let diceDot5 = document.querySelector('.diceDot5');
        diceDot5.style.visibility = "visible";
        let diceDot6 = document.querySelector('.diceDot6');
        diceDot6.style.visibility = "hidden";
        let diceDot7 = document.querySelector('.diceDot7');
        diceDot7.style.visibility = "hidden";

    } else if (dice1Number === 4) {

        let diceDot1 = document.querySelector('.diceDot1');
        diceDot1.style.visibility = "visible";
        let diceDot2 = document.querySelector('.diceDot2');
        diceDot2.style.visibility = "hidden";
        let diceDot3 = document.querySelector('.diceDot3');
        diceDot3.style.visibility = "visible";
        let diceDot4 = document.querySelector('.diceDot4');
        diceDot4.style.visibility = "hidden";
        let diceDot5 = document.querySelector('.diceDot5');
        diceDot5.style.visibility = "visible";
        let diceDot6 = document.querySelector('.diceDot6');
        diceDot6.style.visibility = "hidden";
        let diceDot7 = document.querySelector('.diceDot7');
        diceDot7.style.visibility = "visible";

    } else if (dice1Number === 5) {

        let diceDot1 = document.querySelector('.diceDot1');
        diceDot1.style.visibility = "visible";
        let diceDot2 = document.querySelector('.diceDot2');
        diceDot2.style.visibility = "hidden";
        let diceDot3 = document.querySelector('.diceDot3');
        diceDot3.style.visibility = "visible";
        let diceDot4 = document.querySelector('.diceDot4');
        diceDot4.style.visibility = "visible";
        let diceDot5 = document.querySelector('.diceDot5');
        diceDot5.style.visibility = "visible";
        let diceDot6 = document.querySelector('.diceDot6');
        diceDot6.style.visibility = "hidden";
        let diceDot7 = document.querySelector('.diceDot7');
        diceDot7.style.visibility = "visible";

    } else if (dice1Number === 6) {

        let diceDot1 = document.querySelector('.diceDot1');
        diceDot1.style.visibility = "visible";
        let diceDot2 = document.querySelector('.diceDot2');
        diceDot2.style.visibility = "visible";
        let diceDot3 = document.querySelector('.diceDot3');
        diceDot3.style.visibility = "visible";
        let diceDot4 = document.querySelector('.diceDot4');
        diceDot4.style.visibility = "hidden";
        let diceDot5 = document.querySelector('.diceDot5');
        diceDot5.style.visibility = "visible";
        let diceDot6 = document.querySelector('.diceDot6');
        diceDot6.style.visibility = "visible";
        let diceDot7 = document.querySelector('.diceDot7');
        diceDot7.style.visibility = "visible";
}

/* **********DICE 2 ********** */

    if (dice2Number === 1) {

    let diceDot8 = document.querySelector('.diceDot8');
    diceDot8.style.visibility = "hidden";
    let diceDot9 = document.querySelector('.diceDot9');
    diceDot9.style.visibility = "hidden";
    let diceDot10 = document.querySelector('.diceDot10');
    diceDot10.style.visibility = "hidden";
    let diceDot11 = document.querySelector('.diceDot11');
    diceDot11.style.visibility = "visible";
    let diceDot12 = document.querySelector('.diceDot12');
    diceDot12.style.visibility = "hidden";
    let diceDot13 = document.querySelector('.diceDot13');
    diceDot13.style.visibility = "hidden";
    let diceDot14 = document.querySelector('.diceDot14');
    diceDot14.style.visibility = "hidden";

}

}
rollDice()




