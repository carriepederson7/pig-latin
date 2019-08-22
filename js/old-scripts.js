$(document).ready(function() {
  $("#translator").submit(function(event){
    event.preventDefault();

    // var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","x","y","z"]
    var vowels = ["a","e","i","o","u"]

    var phrases = $("#phrase").val();


    var phraseWords = phrases.split("");
    console.log(phraseWords);


    // .match();- to experiment with


    var finalWord= checkIsVowel(phraseWords);
    console.log(finalWord);

    function checkIsVowel(word){
      var firstLetter;
      for (var i=0; i<vowels.length; i++){
        if (word[0] !== vowels[i]) {
          console.log(word);
          console.log(vowels[i]);
          firstLetter = phraseWords[0].toUpperCase();
          // phraseWords.shift();
          var joinedWord = phraseWords.join("");
          var pigLatinWord = joinedWord.concat(firstLetter + "ay");
        }

      }

      return pigLatinWord
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
