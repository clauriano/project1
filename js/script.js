
//Array array quotes is an array of objects with a quote and the source
var quotes = [
  {
    quote:"Be loyal to those who are loyal to you. ", source:"John Cena"
    },
  {
    quote:"To all my little Hulkamaniacs, say your prayers, take your vitamins and you will never go wrong.", source:"Hulk Hogan"
    },
  {
    quote:"Oh it\'s true, it\'s damn true. ", source:"Kurt Angle"
    },
  {
    quote:"Everything is impossible, until someone crazy enough comes along and makes it possible.", source:"CT Fletcher"
    },
  {
    quote:"You can do anything but not everything", source:"David Allen"
  }
  ];
  console.log(quotes[1].quote);

//function used to get a random number and return an object from the array
  function getRandomQuote (){
    var randomNumber = Math.floor(Math.random() * quotes.length );
    console.log(quotes[randomNumber]);
    return quotes[randomNumber];
  }
  
  
//function used to create the output being written on html page
  function printQuote (){
    var saying = getRandomQuote();
    var output = document.getElementById('quote-box');
    output.innerHTML = "<p class = quote >" + saying.quote + "</p>" + "<p class = source >" + saying.source + "</p>";
  }

  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  