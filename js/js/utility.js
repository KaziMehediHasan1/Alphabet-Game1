function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}


function setBackgroundColorById (elementId){
    console.log(elementId);
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    // return;
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId , value){
   const element = document.getElementById(elementId);
   element.innerText = value;

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
    
}

function getARandomAlphabet(){
    const alphabetString ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
    
    
}