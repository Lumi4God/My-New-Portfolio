// Sound on the button 1 whenever it's clicked
var bleep = new Audio();
bleep.src = "audio/mixkit-arcade-game-jump-coin-216.wav";

// Sound on the = button 2 whenever its's clicked
var bleep2 = new Audio();
bleep2.src = "audio/mixkit-quick-win-video-game-notification-269.wav";

// First sound on whenever player 1 wins
var bleep3 = new Audio();
bleep3.src = 'audio/congratulations.mp3';

// Second sound on whenever player 1 wins
var bleep4 = new Audio();
bleep4.src = 'audio/clap.mp3';
// Third sound on whenever player 1 wins
var bleep7 = new Audio()
bleep7.src = 'audio/coins-drop-1.mp3'

// Sound on whenever two cards are the same
var bleep5 = new Audio();
bleep5.src = 'audio/oohhh.wav';

// Sound on whenever player 1 lost out
var bleep6 = new Audio();
bleep6.src = 'audio/lost-out-screw-you.wav';

// sound of the coin whenever it's flipped
var bleep8 = new Audio();
bleep8.src = 'audio/coins.mp3'

// variables
var youWon = false

let arrayOfRandomNumbers = [];

let noOfTries = 1;

let tryVal = "";

// selecting H1 on the html
const h1 = document.querySelector("h1");


/********Button*Generator*Function**************/
function generator() {

  if (noOfTries < 11) { // times you can play

    arrayOfRandomNumbers = [];
    imgReset();

    var x
    const CHANCES = 31
    var mayLose = (Math.floor(Math.random() * CHANCES)) // 0 falsy

    for (let index = 0; index < 3; index++) {  // number of  images that can appear on the screen at a time

      if (!index || mayLose) {
        x = Math.ceil(Math.random() * 31);  // creating random numbers of images inserted in the game
      }

      // getting the images thru the link
      document.getElementById("divImage").innerHTML += `
            <img src="images/fruit${x}.jpeg" style="width: 230px; height: 300px; border-radius: 10%;">
            `;
      arrayOfRandomNumbers.push(x);
    }

    console.log(noOfTries);

    check_three_numbers(arrayOfRandomNumbers);//changed function name and called it

    noOfTries++; // times you can play (increment)


  }
  else {
    reset();
  }
}

/********************Reset*Function*********************/
function imgReset() {
  // document.getElementsById("divImage").reset();  
  document.getElementById("divImage").innerHTML = "";
}
function reset() {
  h1.innerText = "Play again...";
  noOfTries = 1;
  arrayOfRandomNumbers = [];
  imgReset();
}

/****************CHECKING*THE*NUMBERS*******************/
function check_three_numbers(array) {
  const [num1, num2, num3] = array;
  if (noOfTries <= 10) {
    checker(array);
  } else if (!youWon) {
    // /// THis code will only be called on the 10th time
    // if (num1 === num2 && num2 === num3) {
    //   bleep3.play() // Sound on when player 1 wins
    //   bleep4.play() // Sound on when player 1 wins 
    //   h1.innerText = `Jackpot! you've won the game`;

  } // else {
    // bleep6.play() // Sound on when player lost out
    // h1.innerText = `You lost out!`;
    // }
  }

/********************IMAGE*POP*UP*WHEN*ITS*JACKPOT********************/
var myHandImg = document.getElementById("myHand1");
/******************IMAGE*POP*UP*WHEN*2*IMAGES*ARE*SAME****************/
var myHandImage = document.getElementById("myHand2")

/*********************CHECKING*THE*NUMBER*OF*TRIES**********************/
function checker([num1, num2, num3]) {
  const tryVal = noOfTries === 9 ? "try" : "tries";
  if (num1 === num2 && num2 === num3) {
    bleep3.play() // First sound on when player 1 wins 
    bleep4.play() // Second sound on when player 1 wins 
    bleep7.play() // Third sound on when player 1 wins
    // console.log(bleep4)
    h1.innerText = `Jackpot! you've won the game`;

    youWon = true
    // calling the image to pop up when it's jackpot
    myHandImg.style.display = 'block'
    // setting time-out for the pop up image
    setTimeout(() => {
      myHandImg.style.display = 'none'
    }, 6000);
    // imgReset();
  } else if (num1 === num2 || num2 === num3 || num3 === num1) {
    bleep5.play() // Sound on whenever two cards are the same
    h1.innerText = `You're almost there, ${10 - noOfTries} more ${tryVal}`;

    // calling the image to pop up when 2 images are same
    myHandImage.style.display = 'block'
    // setting time-out for the pop up image when 2 images are same
    setTimeout(() => {
      myHandImage.style.display = 'none'
    }, 3000);

  } else {
    h1.innerText = `Try again, ${10 - noOfTries} more ${tryVal}`;
  }
}


/**********Button*Clicked*Function*With*CSS***********/
const btn = document.querySelectorAll('button')

for (let index = 0; index < btn.length; index++) {

  btn[index].addEventListener('click', function (e) {

    btn[index].classList.toggle('button-clicked');

    // no icon inserted yet

    // btn[index].firstElementChild.classList.toggle('icon-clicked')
  })
}

/////////////////////1/ENABLE/A/DISABLED/BUTTON//////////////////////////
document.getElementById("flip").addEventListener("click",function(e){             
  document.getElementById("btn1").disabled = false; 
},false); 

////////////////////////Function/for/flip/coin//////////////////////////
const coin = document.querySelector('#coin');
const flipButton = document.querySelector('#flip');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

function deferFn(callback, ms) {
  setTimeout(callback, ms); 
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
 deferFn(function() {
   coin.setAttribute('class', 'animate-' + result);
   bleep8.play() // Third sound on when player 1 wins
   deferFn(processResult.bind(null, result), 2900);
 }, 100);
}

flipButton.addEventListener('click', flipCoin);





