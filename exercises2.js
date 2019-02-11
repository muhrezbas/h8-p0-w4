function fpb(angka1, angka2) {
  // you can only write your code here!
  var result = 1;
  var tampung = 0;
  if (angka1>angka2){
    for(i= 0; i<angka2; i++){
      // console.log(angka1)
      // console.log(angka2-i)
      result = angka1 % (angka2 - i)
      tampung = angka2 - i
      if(result === 0){
        if(angka2%tampung===0){
          return tampung
        }
      }
    }
  }
  else if (angka2>angka1){
    for(i= 0; i<angka1; i++){
      result = angka2 % (angka1 - i)
      tampung = angka1 - i
         if(result === 0){
        if(angka1%tampung===0){
          return tampung
        }
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1