console.log('Loaded!');

//change the txt of main-text
var element = document.getElementbyId('main-text');
element.innerHTML='New Content';
//Move the image
var img = document.getElementbyId('pari');
img.onclick = function() {
    img.style.marginLeft= '100 px';
};
    
