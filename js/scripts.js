function pigLatinWord(input){
  var vowels = ['a', 'e', 'i' ,'o', 'u'];
  var regex = /^[a-zA-Z]/;
  var word = "";
  var splitWord =[];

    for(var i=0; i<input.length; i++){
      if(regex.test(input[i])){
        word += input[i].toLowerCase();
        }
      }

    if(vowels.includes(word[0])){
      word += "way";

    }else {
      splitWord = word.split("");
      for(var i= 0; i<splitWord.length; i++){
        if(!vowels.includes(splitWord[0])){
          if(splitWord[0]==="q" && splitWord[1]=== "u"){
            splitWord.push(splitWord.shift());
            splitWord.push(splitWord.shift());
            break;
          }
          splitWord.push(splitWord.shift());

        }else {
          break;
        }
      }

        word = splitWord.join("");
        word = word.concat("ay");



    }


    console.log(word);

}
