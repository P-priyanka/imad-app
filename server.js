var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article-one | Priyanka',
        heading:'Article one',
        Date: 'Sept 5, 2017',
        content: `
                <p>
                    This is the article one of my first Webapp made on imad hasura console.This content is just an Example to display
                    </p>
                    <p>
                        This is the article one of my first Webapp made on imad hasura console.This content is just an Example to display
                    </p>
                    <p>
                        This is the article one of my first Webapp made on imad hasura console.This content is just an Example to display
                    </p>`
    },
    'article-two': {
        title: 'Article-two | Priyanka',
        heading:'Article two',
        Date: 'Sept 10, 2017',
        content:`
        <p>
                    This is the article two of my first Webapp made on imad hasura console.This content is just an Example to display
                </p>
                <p>
                    This is the article two of my first Webapp made on imad hasura console.This content is just an Example to display
                </p>
                <p>
                    This is the article two of my first Webapp made on imad hasura console.This content is just an Example to display
                </p>`
    },
    'article-three':  {
        title: 'Article-one | Priyanka',
        heading:'Article one',
        Date: 'Sept 1, 2017',
        content:`
        <p>
                    This is the Third article of my first Webapp made on imad hasura console.This content is just an Example to display
        </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    
    var htmlTemplate= `
    <html>
        <head>
            <title>
                ${title}
            
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
    
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get ('/counter', function(req,res) {
   counter= counter+1; 
   res.send(counter. toString());
});
app.get('/articleName', function (req, res) {
    var articleName = req.param.articleName;
    res.send(createTemplate(Articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req,res){
    //Get the name from request
    var name= req.params.name; //TODO
    
    names.push(name);
    //JSON: Javascript Object Noatation
    res.send(JSON.stringify(names));//TODO
    
    
})

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
