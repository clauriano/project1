

var quotes = [
  {
    quote:"Be loyal to those who are loyal to you. ", name:"John Cena"
    },
  {
    quote:"To all my little Hulkamaniacs, say your prayers, take your vitamins and you will never go wrong.", name:"Hulk Hogan"
    },
  {
      quote:"Oh it\'s true, it\'s damn true. ", name:"Kurt Angle"
    },
  {
      quote:"Everything is impossible, until someone crazy enough comes along and makes it possible. ", name:"CT Fletcher"
    }
  ];
  console.log(quotes[1].quote);

  function getRandomQuote (){
   var randomNumber = Math.floor(Math.random() * quotes.length );
    return "<p class = quote >" + quotes[randomNumber].quote + "</p>" + "<p class = source >" + quotes[randomNumber].name + "</p>";
  
  }


  function printQuote (){
    saying = getRandomQuote();
    var output = document.getElementById('quote-box');
    output.innerHTML = saying
  }

  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
