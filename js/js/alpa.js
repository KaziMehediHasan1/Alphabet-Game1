// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// }

// uptext cancel

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');

    // console.log(currentAlphabetElement.innerText)

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // Increase the Score
        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;
        setTextElementValueById('current-score', newScore)


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } 
    
    else{
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // New Life
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        console.log('you missed, you lost a life');
        
        // setTextElementValueById('currentLife', newLife);

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        

        if(updatedLife === 0){
            gameOver();
        }

    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);



function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    console.log(currentAlphabetElement.innerText);
    setBackgroundColorById(alphabet.toLowerCase());
    

}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
    

}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}


