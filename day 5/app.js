var express = require('express');
// Creating an express app to use its methods and properties
var app = express();

// Setting ejs as our view engine in express
// The default behaviour will look at views folder
app.set('view engine','ejs');

// GET requests using express
app.get('/',function(request, response){
    response.send("This is the homepage");
});

// You can render files using express through get methods
app.get('/file',function(request, response){
    response.sendFile(__dirname + '/app.js');
});

app.get('/profile/:name',function(request, response){
    var data = {
        age: 19,
        job: 'ninja'
    };
    response.render('profile',{
        person: request.params.name,
        data: data
    });
});

app.get('/contact',function(request,response){
    response.send("This is the contact page");
});

// Route parameters in Express for dynamicness
// app.get('/profile/:id', function(request, response){
//     response.send('You requested to see a profile with the id of ' + request.params.id);
// });

app.listen(3000);
//http verbs or methods
// GET,POST, DELETE, PUT



