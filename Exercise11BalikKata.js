//Exercise 11
function balikKata(kata) {
    
    var kataBalik ='';
  
    for (i=kata.length -1; i>=0; i--)
    {
      kataBalik = kataBalik + kata[i];
    }
    return kataBalik;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS