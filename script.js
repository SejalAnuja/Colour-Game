const colorCode = document.getElementById("color-code");
const option = document.getElementById("option-container");
let random = null;
let score = 0;
function generateRandonRGB(min,max){
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandonColor(){
    const red = generateRandonRGB(0,255);
    const green = generateRandonRGB(0,255);
    const blue = generateRandonRGB(0,255);
    return `rgb(${red}, ${green}, ${blue})`;
}
function validAnswer(){
    const selector = this.style.backgroundColor;
    if(random === selector){
        score++;
        document.getElementById("score").innerHTML = score;
        startGame();
    }
    else{
        document.getElementById("score").innerHTML = 0;
        score = 0;
    }
}
function startGame(){
    option.innerHTML = null;
    random = generateRandonColor();
    colorCode.innerText = random;
    const index = generateRandonRGB(0,5);
    for(let i=0;i<6;i++){
        const div =  document.createElement("div");
        div.addEventListener('click',validAnswer);
        div.style.backgroundColor = i== index ? random : generateRandonColor();
        option.appendChild(div);
    }
    
}

window.addEventListener('load',startGame());