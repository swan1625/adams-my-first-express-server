// const { response } = require("express");

$(document).ready(onReady);    /// 
//$(onReady); 

function onReady() {
    getQuotes();
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