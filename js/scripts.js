$(document).ready(function() {
  $("#translator").submit(function(event){
    event.preventDefault();

    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","x","y","z"]
    var vowels = ["a","e","i","o","u"]

    var phrases = $("#phrase").val();


    var phraseWords = phrases.split("");
    var firstLetter = phraseWords[0].toUpperCase();
    phraseWords.shift();
    var joinedWord = phraseWords.join("");
    var pigLatinWord = joinedWord.concat(firstLetter + "ay");
  console.log(pigLatinWord);




    // console.log(phrases);


    // phraseWords.forEach(function(phraseWord) {
    //   var wordLetters = phraseWord.split("");
    //   var firstLetter = wordLetters.shift();
    //   console.log(firstLetter);

      // console.log(wordLetters);
      //
      // for (var i=0; i<wordLetters.length; i++){
      //   for (var x=0; i<consonants.length; i++){
      //   if (wordLetters[0]===consonants[x]){
      //
      //
      //
      //     }
      //   }
      // }
      //

    // });
    //
    // console.log(wordLetters);


  });
});
