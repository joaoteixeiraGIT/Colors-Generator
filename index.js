const color = document.querySelector('.color');

//Fica à escuta de alguma ação no botão no html, neste caso o click
btn.addEventListener('click', function() {
    document.body.style.background = getRandomColor();
    color.textContent = getRandomColor();
} )

// gera uma cor aleatória em hexadecimal
function getRandomColor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
        //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

//-----Código do Tutorial-----------------------------------------------------------

// const colors = ['Red','Blue','Yellow','Green','Purple','Gray'];
// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');

// function getRandomColor(){
//     const randomNumber = Math.floor(Math.random()*colors.length);
//     const randomColor = colors[randomNumber];
//     return randomColor;
// }