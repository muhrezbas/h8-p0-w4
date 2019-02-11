function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf = "abcdefghijklmnopqrstuvwxyz";
    var kataSplit = kata.split("");
    // var kataSplitNyambung = kata.join("");
    var result = "";
  
    for(var i=huruf.length;i>=0;i--) {
      for(var j = 0; j<kataSplit.length; j++){
        if(kataSplit[j]===huruf[i]){
          kataSplit[j] = huruf[i+1]
        }
      }
  }
  return kataSplit.join("")
  }
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu