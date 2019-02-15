$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var randomAuthor;
  getQuote();
  
  function getQuote(){
    
    var quotes = ["Playing baseball for a living is like having a license to steal.", "I ain't afraid to tell the world that it don't take school stuff to halp a fella play ball.", "It helps if the hitter thinks you're a little crazy.", "I never smile when I have a bat in my hands. That's when you've got to be serious.", "I never blame myself when I'm not hitting. I just blame the bat and if it keeps up, I change bats.", "With the money I'm making, I should be playing two positions.", "The only thing I can do is play baseball. I have to play ball. It's the only thing I know"];
    
    var authors = ["Pete Rose", "Shoeless Joe Jackson", "Nolan Ryan", "Hank Aaron", "Yogi Berra", "Pete Rose", "Mickey Mantle"];
    
    var randomNum = Math.floor(Math.random()*quotes.length);
    
    var randomQuote = quotes[randomNum];
    var randomAuthor = authors[randomNum];
    
  $("#quote").text(randomQuote);
  $("#author").text(randomAuthor); 
  
}
    $("#tweet-quote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote)
  });
    $("#new-quote").on("click", function(){
    getQuote()
  });

});
