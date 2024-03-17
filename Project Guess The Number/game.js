let randomNumber=parseInt(Math.random()*100+1)

const userInput=document.getElementById('guessField');
const sumbmit=document.getElementById('subt');
const guessSlot=document.querySelector('.guesses');
const guessRemain=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas')

let p=document.createElement('p');


let prevGuessArr=[];
let numGuess=1;
let playGame=true;

if(playGame){
    sumbmit.addEventListener('click', function(event){
        event.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid message");
    }else if(guess<1){
        alert("Please enter a greater value than zero")
    }else if(guess>100){
        alert("Please enter a valid range between 0-100, your number is greater than 100");
    }else{
        prevGuessArr.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`You have no attempt left. Your Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Your guess is right, Your Random number was ${randomNumber}`);
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Your guess number is low`)
    }else if(guess > randomNumber){
        displayMessage(`Your guess number is high`)
    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess},   `;
    numGuess++;
    guessRemain.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML='<h2 id="newgame"> start a new game </h2>';
    startOver.appendChild(p);
    playGame=false;
    startGame();
}

function startGame(){
    const btn=document.querySelector('#newgame');
    btn.addEventListener('click', function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuessArr=[];
        numGuess=1;
        guessSlot.innerHTML='';
        guessRemain.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}







