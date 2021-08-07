const topBarElements = document.querySelectorAll("#top-bar #buttons *");
const simpleFlip = topBarElements[0];
const hexFlip = topBarElements[1];
const main = document.querySelector('#main');
const flipButton = main.querySelector(' button');
const colorBox = main.querySelector('div #color');
const colors = ['red', 'blue', 'yellow', 'pruple', 'skyblue', 'orange', 'green', 'pink', 'brown'];
let currentColor = 0;
let flipMode = 0;


setMainColor();

simpleFlip.addEventListener('click', e => {
    flipMode = 0;
    simpleFlip.classList.add('black-text');
    hexFlip.classList.remove('black-text');
})

hexFlip.addEventListener('click', e => {
    flipMode = 1;
    hexFlip.classList.add('black-text');
    simpleFlip.classList.remove('black-text');
})


flipButton.addEventListener('click', e => {
    if(!flipMode){
       let colorNr = 0;
        do {
            colorNr = Math.floor(Math.random() * 9);
        }while(colorNr === currentColor);
        console.log(colorNr);   
        main.style.backgroundColor = colors[colorNr];
        changeColorName(colors[colorNr]);
        currentColor = colorNr;
    }
    else{
        const chars = 'abcdef';
        let color = '#';
        for(let i = 0; i < 6; i++){
            if(Math.floor(Math.random() + 0.5))
                color += chars[Math.floor(Math.random()*6)];
            else color += Math.floor(Math.random()*10);
        }
        console.log(color);
        main.style.backgroundColor = color;
        changeColorName(color);
    }
})

function setMainColor(){
        currentColor = Math.floor(Math.random() * 9);
        main.style.backgroundColor = colors[currentColor];
        changeColorName(colors[currentColor]);
}

function changeColorName(col){
    colorBox.innerText = col;
}