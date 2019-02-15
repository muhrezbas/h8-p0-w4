function ubahHuruf(kata) {
 var abjad = "abcdefghijklmnopqrstuvwxyz"
 var abjad = abjad.split("")
 var kata = kata.split("")
 var index = 0
 result = ""

 for (i = 0; i < abjad.length; i++) {
  
  if (abjad[i] !== kata[index]) {
   }
   else if (abjad[i] === kata[index]) {
     result += abjad[i+1]
     if(result === "undefined"){
       result = "a"
     }
     i = -1
     index++
   }
 }
 return result
}

// TEST CASES
console.log(ubahHuruf('zow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu