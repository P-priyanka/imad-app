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
    request.open( 'GET', 'http://priyankasingh8568.imad.hasura-app.io/counter' ,true);
    request.send(null);
};

//submit name
var nameInput=document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function() {
    //
    //capture a list of names and render it as a list
    var names= ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(i=0;i<names;i++) {
        list+= '<li>' + names[i] + '</li>' ;
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML = list;
};