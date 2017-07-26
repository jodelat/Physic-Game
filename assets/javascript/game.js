var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var guesses = 10;
var losses = 0;


  document.onkeyup = function(event) {
    function reset(){
        guesses = 10;
    }

  var player = event.key;
  var random = alphabet[Math.floor(Math.random()*alphabet.length)];

  if(player === random && guesses >= 1) {
    wins++;
    reset(guesses);
    console.log("wins:" + " " + wins);
  }
  else if(player !== random && guesses >= 1) {
    guesses--;
    if(guesses < 1){
      losses++;
      reset(guesses);
    }
    console.log("losses:" + " " + losses);
    console.log("guesses" + " " + guesses);
  }

  var html =
   "<p>You chose: " + player + "</p>" +
   "<p>The computer chose: " + random + "</p>" +
   "<p>wins: " + wins + "</p>" +
   "<p>losses: " + losses + "</p>" +
   "<p>guesses left: " + guesses + "</p>";

  document.querySelector("#game").innerHTML = html;

}
