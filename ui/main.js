console.log('Loaded!');

//change the txt of main-text
var element = document.getElementbyId('main-text');
element.innerHTML='New Content';
//Move the image
var img = document.getElementbyId('pari');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};
    
