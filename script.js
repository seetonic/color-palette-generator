const generateBtn = document.getElementById('generatebtn');
const color = document.querySelectorAll('#color');
const hexCode = document.querySelectorAll('.hex-code')

function generateRandomColors() {
   return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

generateBtn.addEventListener('click', function () {
    for(let i = 0; i < color.length; i++){
        color[i].style.background = generateRandomColors();
        hexCode[i].innerHTML = `${generateRandomColors()}`;
    }
});

for( let i = 0; i < color.length; i++){
    color[i].style.background = generateRandomColors();
}

for(let i = 0; i <hexCode.length; i++) {
    hexCode[i].innerHTML = `${generateRandomColors()}`;
}
