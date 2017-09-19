console.log('Loaded!');
var counter = 0;
//counter code

var button = document.getElementById('counter');
button.onclick = function() {
    //capture and restore it in a variable
    
    //render the variable in the correct span
    counter = counter + 1;
    
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};