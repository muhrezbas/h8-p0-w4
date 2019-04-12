function ubahHuruf(kata) {
  // you can only write your code here!
  var kata = kata.split("")
  var abjad = "abcdefghijklmnopqrstuvwxyz"
  var result = ""

  for(var i = 0; i<kata.length; i++){
      for(var j =0; j<abjad.length; j++){
          if(kata[i]===abjad[j] && abjad[j+1]===undefined){
              result+="a"
          }
          else if(kata[i]===abjad[j]){
              result+=abjad[j+1]
          }
      }

  }
  return result
}

// TEST CASES
console.log(ubahHuruf('zoz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu