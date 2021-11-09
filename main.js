let apiQuotes = [];
let maintext = '';
let auther = '';



const load = document.getElementsByClassName('loader');
const quoteContainer = document.getElementById('quote-container');



function loader(){
    load.hidden= false;
    quoteContainer.hidden = true;

}

function complete(){
    quoteContainer.hidden = false;
    load.hidden= true;
}

async function getQuote() {
    loader();
    const url = 'https://type.fit/api/quotes';
     try{
            // code here 
           
            const response = await fetch(url);
            apiQuotes = await response.json();
            let number =Math.floor(Math.random()* apiQuotes.length);
            // console.log(apiQuotes[111].text);
            console.log(number)
            maintext = apiQuotes[number].text;
            auther = apiQuotes[number].author;
            console.log(maintext)
            complete();
            // document.querySelectorByClass('.quotes').html(text)
         
            
     }
     catch(error){
                // catch error here
     }
     
   
}

getQuote();


$('#getQuote').click(function(){
    getQuote();
  
    $('.quotes').html(maintext);
    $('.auther').html(auther);

});