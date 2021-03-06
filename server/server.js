// require express
// gives us a function 
const express = require('express');
const bodyParser = require('body-parser'); //body-parser 


// create an instance of express by calling the function returned above
// gives us an object 

const app = express(); 

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));   //setting up body- parser

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));


// let quoteList = [
//     { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
//     { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
//     { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
//   ];

const quoteList = require('./modules/quoteList'); //dont need to add .js on quotelist because JS is sloppy


// when we visit localhost:5000/quotes in our browser, express will call this function 
//req is request. res is response
  app.get('/quotes', function(req, res){
    console.log('Request at /quotes was made', req.body);
    res.send(quoteList);
    // res.sendStatus(500); // sends internal server error
  });

  app.post('/quotes', function (req, res) {
    // the data that is sent from the client is saved for us in req.body
    // with out body-parser, req.body is undefined
    console.log('req.body from post is', req.body.quoteToAdd);
    // grab the new quote from the request body
    let quote = req.body.quoteToAdd;
    quoteList.push(quote);
    //send back a status code of 201
    res.sendStatus(201);
  })




// 4 common methods
// .get
// .post
// .push
// .delete


// start up our server
app.listen(port, function() {
    console.log('listening on port', port);
});

