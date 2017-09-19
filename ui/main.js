console.log('Loaded!');

//counter code

var button = document.getElementById('counter');
button.onclick = function() {
    
    //Create a Request object
    
    var request = new XMLHttpRequest();
    
    //capture and restore it in a variable
    request.onreadystatechange = function() {
    if(request.readyState === XMLhttpRequest.DONE) {
        //take some action
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }
      }
        //Not yet Done
    };
    //Make a Request
    request.open( 'GET', 'http://priyankasingh8568.imad.hasura-app.io' ,true);
    request.send(null);
};