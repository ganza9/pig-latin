function vowelStartCheck(stringIn){

  var word = stringIn.split("");

  if(word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u'){
    word.push('w', 'a', 'y');
  }
  stringIn = word.join("");
  return stringIn;
}

function consonantStartCheck(stringIn){
  var word = stringIn.split("");
  if(word[0] != 'a' || word[0] != 'e' || word[0] != 'i' || word[0] != 'o' || word[0] != 'u'){
    var temp = word[0];
    var tempConst = [];
    var i = 0;
    var j = 0;
    while(i == 0){
      if(word[0] != 'a' || word[0] != 'e' || word[0] != 'i' || word[0] != 'o' || word[0] != 'u'){
        tempConst.push(word[0]);
        word.shift();
        if(word[0] == 'u'){
          tempConst.push(word[0]);
          word.shift();
        }
      }
      if(word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u' || word[0] == ' '){
        i++;
      }
      if(j > 40){
        i++;
      }
      j++;
    }
    word.push(tempConst);
    word.push('a', 'y');
    stringIn = word.join("");
  }
  return stringIn;
}

function clicked(event){
  event.preventDefault();
  var stringIn = $("input#stringIn").val();
  var word = stringIn.split("");

  if(word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u'){
    stringIn = vowelStartCheck(stringIn);
  } else {
  stringIn = consonantStartCheck(stringIn);
  }
  stringIn = stringIn.replace(",", "");
  $("#stringOut").text(stringIn);
}
