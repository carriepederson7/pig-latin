$(document).ready(function() {
  $("#translator").submit(function(event){
    event.preventDefault();

    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","x","y","z"]
    var vowels = ["a","e","i","o","u"]

    var phrases = $("#phrase").val();
    var phraseWords = phrases.split(" ");
    console.log(phrase);
    console.log(phraseWords);

    phraseWords.forEach(function(phraseWord) {
      var wordLetters = phraseWord.split("");
      for (var i=0; i<wordLetters.length; i++){
        for (var x=0; i<consonants.length; i++){
          if (wordLetters[i]===consonants[x]){
            wordLetters.shift();


          }
        }
      }

console.log(wordLetters);
    });



  });
});
