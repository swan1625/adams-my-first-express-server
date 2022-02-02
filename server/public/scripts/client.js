// const { response } = require("express");

$(document).ready(onReady);    /// 
//$(onReady); 

function onReady() {
    getQuotes();
    $('#send-button').on('click', addQuote);

}

function getQuotes() {
    //get quotes from the server using AJAX
    $.ajax({
        method: 'GET' ,
        url: '/quotes'
    }).then (function(response) {                    ///always need a .then and .catch with your ajax
        console.log('great success!', response);
        //TODO appened quotes to DOM 
        renderToDom(response);

    }).catch(function(response){
        console.log('OPE, no luck!', response);
    })                          
}

function renderToDom(quotes) {
    for (let quote of quotes) {
        $('#output').append(`<p>
        ${quote.text}, <i> ${quote.author} </i>
        
        </p>`);
    }

}

function addQuote(){
    //using ajax to make a POST request to server
    $.ajax({
        method: 'POST', // type of request
        url: '/quotes',  /// route we will match on
        data: {                      /// data must be on object !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            quoteToAdd: {
                text:  $(`#quote-input`).val(),
                author: $(`#author-input`).val()
            }
        }
    }).then(function(response){
        console.log('look as us now, DAWG!');
        getQuotes();             ///to refresh the dom with the new quote
    }).catch(function(response){
        console.log('oh no :(!', response);
    })    
}