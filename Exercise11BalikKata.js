function balikKata(kata) {
    //memisahkan kata satu persatu jadi array
    var pisahKata = kata.split(""); 
 
    //membalikan array yang dibuat 
    var balikinArray = pisahKata.reverse();
 
   //menggabungkan setiap element array jadi string
    var gabungArray = balikinArray.join(""); 

    //mengembalikan hasil penggabungan
    return gabungArray;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS