

var quotes = [
  {
    quote:"Be loyal to those who are loyal to you. ",name:"John Cena"
    },
  {
    quote:"To all my little Hulkamaniacs, say your prayers, take your vitamins and you will never go wrong.",name:"Hulk Hogan"
    }
  ];
  console.log(quotes);

  function getRandomQuote (array){
    for (var i = 0; i < array.length; i += 1){
        var saying = array[i].quote
        var person = array[i].name
    console.log(saying + person);
    }

  
  }
  getRandomQuote(quotes);
  
  
  function printQuote (){
    document.write("<p class = quote >" + saying + "</p>");
    document.write("<p class = source>" + person + "</p>");
  }
  
  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
