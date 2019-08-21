$(document).ready(function() {
  $("#translator").submit(function(event){
    event.preventDefault();

    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","x","y","z"]
    var vowels = ["a","e","i","o","u"]

    var phrases = $("#phrase").val();


    var phraseWords = phrases.split("");
    console.log(phraseWords);
    


    function checkIsVowell(phrasewords[0]){
      for (var x=0; i<vowells.length; i++){
        if (phraseWords[0]!==vowells[x]) {
          var firstLetter = phraseWords[0].toUpperCase();
          phraseWords.shift();
          var joinedWord = phraseWords.join("");
          var pigLatinWord = joinedWord.concat(firstLetter + "ay");

        }
      }
    }












    // console.log(phrases);


    // phraseWords.forEach(function(phraseWord) {
    //   var wordLetters = phraseWord.split("");
    //   var firstLetter = wordLetters.shift();
    //   console.log(firstLetter);

      // console.log(wordLetters);
      //

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
