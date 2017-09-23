console.log('Loaded!');

//counter code

var button = document.getElementById('counter');
button.onclick = function() {
    //Make a Request
    request.open( 'GET', 'http://priyankasingh8568.imad.hasura-app.io/counter',true);
    request.send(null);
}; 

//submit name
var submit=document.getElementById('submit_btn');
submit.onclick = function() {
    //
    
    //Create a Request object
    
    var request = new XMLHttpRequest();
    
    //capture and restore it in a variable
    request.onreadystatechange = function() {
    if(request.readyState === XMLhttpRequest.DONE) {
        //take some action
        if (request.status === 200) {
            //capture a list of names and render it as a list
                var names= request.responseText;
                names=JSON.parse(names);
                var list = '';
                for(i=0;i<names.length;i++) {
                list+= '<li>' + names[i] + '</li>' ;
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML = list;
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }
      }
        //Not yet Done
    };
    
    //Make a Request
    var nameInput=document.getElementById('name');
    var name= nameInput.value;
    request.open( 'GET', 'http://priyankasingh8568.imad.hasura-app.io/counter/submit-name?name' +name,true);
    request.send(null);
};